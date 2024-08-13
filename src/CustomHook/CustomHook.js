
import React from 'react'
import useChook from './Chook';

const CustomHook = () => {
const lnews= useChook("http://localhost:4000/Lnews");
const student= useChook("http://localhost:4000/Lnews");
  return (
    <>

<h1>LNEWS</h1>
     { 
     
        lnews.map((lnews)=>{
           return(
            <div key={lnews.id}>
            <h1>{lnews.id}</h1>
            <h1>{lnews.lnews}</h1>
            </div>
           )
        })
     }


<h1>Students</h1>
     { 
     
     student.map((student)=>{
           return(
            <div key={student.id}>
            <h1>{student.id}</h1>
            <h1>{student.lnews}</h1>
            </div>
           )
        })
     }

    </>
  )
}

export default CustomHook