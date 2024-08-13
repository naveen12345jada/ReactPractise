import React from 'react'

const FunctionConditionalRenderingcooperator = () => {
    let login =true
    let msg
    
    msg = login ? <h1> hello mass</h1> : <h1> hello1243</h1>
  return (
    <div>FunctionConditionalRenderingcooperator
{        
        //   msg = login ? <h1> hello mass</h1> : <h1> hello1243</h1>
            msg
        }
        
       
    </div>
  )
}

export default FunctionConditionalRenderingcooperator