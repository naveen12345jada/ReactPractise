import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[counter,setCounter]=useState(1);

    const[number,setNumber]=useState(5)

    let factori= useMemo(()=>{
      factorial(number);
    },[number]
   
    )
  return (
    <>
    <div>{counter}</div>
    <button onClick={ ()=>setCounter(counter+1)}>counter</button>
    <h1>{number}:factorial is :{factori }</h1>
      <button onClick={()=>setNumber(number+1)}>increement factorial</button>

    </>
  )
}

export default UseMemo


 function factorial(num){
   let  fact=1;
for(let i=num;i>0;i--){
  fact=fact*i;

}
console.log("factorial is executing")
return fact

}