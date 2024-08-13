import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Api.css'
const Get = () => {
    const [student,setStudent]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/employees")
        .then((res)=>{
        setStudent(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    })
  return (
    <>
         <table >
            <div>
         <thead>
           <tr >
             <th >id</th>
             <th>name</th>
             <th>salary</th>
           
           </tr>
         </thead>
         <tbody>
         {
            student.map((stu)=>{
                return(
                    <>
                    <tr key={stu.id}>
                    <td >{stu.id}</td>
                    <td >{stu.name}</td>
                    <td >{stu.salary}</td>
                    </tr>
                    </>
                )
            })
        }
             </tbody>
             </div>
             </table>
         
    </>
  )
}

export default Get