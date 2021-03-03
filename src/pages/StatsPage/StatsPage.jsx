import React,{useEffect,useState,useCallback} from 'react'

import { useHistory } from "react-router-dom"
import { useHttp } from '../../hooks/http.hook'
import { Header } from "../../conponents/Header/Header"
import { Footer } from "../../conponents/Footer/Footer"
import { Container } from '../../conponents/Container/Container'
import { Table } from "../../conponents/Table/Table"
import { TableSwiper } from '../../conponents/Swiper/TableSwiper'
import { Loader } from '../../conponents/Loader/Loader'


export const StatsPage = () => {
  const history = useHistory()
  const [table,setTable] = useState([])
  const [page,setPage] = useState(1)
  const [pages,setPages] = useState()
  const {request,loading} = useHttp()

  const redirect = (id) => {
    //  из-за особеностей прокси запросов с фронта назвал роут  {api} фиксится при деплое на {user}
    history.push(`/api/${id}`)
  }

  const getAllPages = useCallback(async () => {
    //  из-за особеностей прокси запросов с фронта назвал роут  {api} фиксится при деплое на {user}
    const allUsers = await request(`api/users/getusers`,'GET')

    setPages(Math.ceil(allUsers.length / 50))
  },[request]) 

  const changePage = (newPage) => {
    setPage(newPage)
    getUsers()
  }

  const getUsers = useCallback(
    async () => {
      const req  = await request(`api/users/page/${page}`,'GET')
      const stat = await request(`api/statistic/page/${page}`,'GET')
      console.log(req, stat)
      const staticticByUser = req.map( user => {
        user.clicks = 0
        user.page_views = 0
        stat.map( item => {
          if (item.user_id === user.id){
            user.clicks = user.clicks + item.clicks
            user.page_views = user.page_views + item.page_views   
          } 
          return item
        })
        return user
      })

      setTable(staticticByUser)
    },[request,setTable,page])

  useEffect(() => {
    getUsers()
    getAllPages()
  },[getUsers,getAllPages])

  if(loading) {
    return (
      <>
        <Header />
        <main>
          <Loader />
        </main>
        <Footer isMain={false}/>
      </>
      )}

  return (
    <>
      <Header />
      <main>
        <Container>
          <h4>User statistics</h4>
        </Container>
        <Table arr={table} redirect={redirect} />
        <TableSwiper onClick={changePage} length={pages} />
      </main>
      <Footer isMain={false}/>
   </>
       
  )
}
