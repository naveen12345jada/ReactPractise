import React from 'react'
import ReactDOM from 'react-dom'


const RenderWithoutIdRoot = () => {
  return (
    ReactDOM.createPortal(<h1>Jada Naveen Kumar</h1>,
    document.getElementById('sampleid'))
 
  
) 
};
export const RenderWithoutIdRoot2 = () => {
  return ReactDOM.createPortal(<h1>Jada Naveen Kumar</h1>,
    document.getElementById('sampleid2')
)
  
};




export default RenderWithoutIdRoot