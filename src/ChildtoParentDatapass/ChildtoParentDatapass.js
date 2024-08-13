import React from 'react'

const ChildtoParentDatapass = (props) => {
    let name="kumar";
  return (
    <>
    <div>ChildtoParentDatapass{name}</div>
    <button onClick={()=>{props.alert(name)}}>click</button>
    
    </>
  )
}

export default ChildtoParentDatapass