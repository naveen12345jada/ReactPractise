import React from 'react'

export const FunctionConditionalRenderingif = () => {
    let login =false;
    let msg;
    if(login){
        msg= <h1>hello login</h1>
      }else{
        msg= <h1>hello user</h1>
      }
  return (
    <div>  {msg}</div>
       
  )
}
