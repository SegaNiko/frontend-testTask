import React from 'react'

import '../../assets/scss/Table.scss'

export const Table = ({arr, redirect}) => {
  return (
    <div className="table__wrap">
      <table className="table">
      <thead >
        <tr>
          <th>id</th>
          <th>Fitst Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Genger</th>
          <th>ID address</th>
          <th>Total click</th>
          <th>Total page views</th>
        </tr>
      </thead>
      <tbody>
      {arr.map(item => (
        <tr key={item.id} onClick={()=>redirect(item.id)}>
          <td>{item.id}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.gender}</td>
          <td>{item.ip_address}</td>
          <td>{item.clicks}</td>
          <td>{item.page_views}</td>
        </tr>
        ))}
    </tbody>
    </table>
  </div>
 
  )
}
