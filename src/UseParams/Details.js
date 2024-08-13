import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const {id}=useParams();
const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>{
      setData(res.data)
    })
    .catch((e)=>{
      console.log(e);
    })
    if(!data){
      setData("Loading data....")
    }
  })
 
  return (
    <div>
    <table className='table table-bordered p-2 table-danger'>
      <thead>
       <tr >
        <th >userId</th>
        <th>id</th>
        <th>title</th>
        <th>body</th>
       </tr>
      </thead>
      <tbody>
      
 
   <tr >
    <td>{data.userId}</td>
    <td>{data.id}</td>
    <td>{data.title}</td>
    <td>{data.body}</td>
   </tr>
   

      
      </tbody>
    </table>
    </div>
  )
}

export default Details