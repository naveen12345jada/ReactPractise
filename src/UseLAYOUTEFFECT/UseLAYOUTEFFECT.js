import React, { useEffect, useLayoutEffect } from 'react'

const UseLAYOUTEFFECT = () => {
    
        useEffect(()=>{
            console.log("from useEffect");
            
        })
        useLayoutEffect(()=>{
            console.log("from useLayoutEffect");
            
        })
    

  return (
    <div>UseLAYOUTEFFECT</div>
  )
}

export default UseLAYOUTEFFECT