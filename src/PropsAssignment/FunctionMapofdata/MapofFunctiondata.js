import React from 'react'

export const MapofFunctiondata = () => {
    let names= ["naveen",20,"delhi","05-12-1999",67,"calcutta","india","kolkatt"]
  return (
    <div >{
names.map((data,index)=>
    <h1 key={index}>{data}</h1>
)
         }
    </div>
  )
}
