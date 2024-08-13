import React, { useRef,useEffect} from 'react'

const UseRef = () => {
let counter=useRef(1);

let changeData=()=>{ 
    //  counter.current.focus()  //both are same only 
   counter.current.value++
//    counter.current.focus()
}
useEffect(()=>{
 counter.current.focus()
 console.log("EXECUTING.....")
})


  return (
    <div>
    <input type='text'  ref={counter} />
    <button  onClick={changeData}>+</button>
    </div>
  )
}

export default UseRef