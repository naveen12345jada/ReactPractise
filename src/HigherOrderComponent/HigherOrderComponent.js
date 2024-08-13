import React, { Component } from 'react'

const HigherOrderComponent = (Comp) => {
   return( 
    class Newcomponent extends Component{
        constructor(props) {
          super(props)
        
          this.state = {
             login:true
          }
        }
    
  render(){
  return this.state.login?<Comp></Comp>:<h1>please login</h1>
  }
}
   )
}
export default HigherOrderComponent