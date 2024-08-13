import React from 'react'
import Childtoparent from './Childtoparent'

const Parent = () => {
    const data=(nam)=>{
        document.write("hello"+nam)
    }
  return (
    <div>
    Parent
    <Childtoparent parent={data}></Childtoparent>
    </div>
  )
}

export default Parent