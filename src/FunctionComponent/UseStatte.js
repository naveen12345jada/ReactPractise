import React, { useEffect, useState } from 'react'

function UseStatte() {
    let [name, setName]=useState('naveen');
    let [counter,setCounter] =useState(0);
    
    useEffect(()=>{
      document.title=`hello ${counter}`
 
    })
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>{setName("Naveen Kumar")}} >changeName</button>
        <h1>{counter}</h1>
        <button onClick={()=>{setCounter(counter+1)}} className='m-2 '>+</button>
        <button onClick={()=>{setCounter(counter-1)}} className='m-2' > - </button>
        <button onClick={()=>{setCounter(0)}} className='m-2'>Reset</button>


    </div>  
  )
}

export default UseStatte;