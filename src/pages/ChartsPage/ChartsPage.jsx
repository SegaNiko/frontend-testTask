import React,{ useEffect,useState,useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { useHttp } from '../../hooks/http.hook'
import { Header } from "../../conponents/Header/Header"
import { Footer } from "../../conponents/Footer/Footer"
import { Container } from '../../conponents/Container/Container'
import { Loader } from '../../conponents/Loader/Loader'
import { Chart } from '../../conponents/Chart/Chart'


export const ChartsPage = () => {
  const userId = useParams().id
  const [user,setUser] = useState({})
  const [userClicks,setUserClicks] = useState([])
  const [userPageViews,sePageViews] = useState([])
  const {request,loading} = useHttp()

  function parseYMD(s) {
    let res = s.split("-")
    let months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", 
      "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months[res[1]-1]
  }
 
  const getUserStat = useCallback(
    async () => {
      const stat = await request(`statistic/user/${userId}`,'GET')
      const user = await request(`users/user/${userId}`)
      let clicks = stat.map(item => {
        return {
          name:`0${new Date(item.date).getMonth()}-0${new Date(item.date).getDay()}`,
          clicks: item.clicks
        }
      })
      let pageViews = stat.map(item => {
        return {
          name:`${parseYMD(item.date).toString()} ${new Date(item.date).getDay()}`,
          page_views: item.page_views
        }})

        setUser(user)
        setUserClicks(clicks)
        sePageViews(pageViews)

    },[request,userId,setUserClicks,sePageViews,setUser])

    useEffect(() => {
      getUserStat()
    },[getUserStat])

    if(loading) {
      return <Loader />
    }

  return (
    <>
      <Header />
      <main>
        <Container>
          <h4>{`${user.first_name} ${user.last_name}`}</h4>
          <h5>Cliks</h5>
          <Chart data={userClicks} useKey="clicks"></Chart>
          {/* <CanvasGraphic arr={userClicks}></CanvasGraphic> */}
          <h5>Views</h5>
          <Chart data={userPageViews} useKey="page_views"></Chart>
          {/* <CanvasGraphic arr={userPageViews}></CanvasGraphic> */}
        </Container>
      </main>
      <Footer isMain={false}/>
    </>
  )
}
