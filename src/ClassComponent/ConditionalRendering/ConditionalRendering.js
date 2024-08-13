import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         login: false,
      }
    }
  render() {

      
        
        // if(this.state.login) {
        //    return <h1 style={{color:"white"}}>Hello Naveen</h1>        
        // }else{
        //     return <h1 style={{color:"white"}}>Hello user</h1>  
        // }
        let msg;
        if(this.state.login) {
            msg= <h1 >Hello Naveen</h1>        
         }else{
            msg= <h1 >Hello user</h1>  
         }
    return msg // in order to avoid to use two return statements
    
  }
}
