import React from 'react'

const Childtoparent = (props) => {
    const name="naveen kumar"
  return (
    <div>
        Childtoparent
      <button onClick={()=>{props.parent(name)}}>childsend</button>
    </div>
  )
}

export default Childtoparent