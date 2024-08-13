import React, { Component } from 'react'

export default class Conditionop extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         login:true
      }
    }
  render() {
    let msg
//   msg= this.state.login?<h1>hello naveen  Kumar</h1> : <h1>hello user </h1>
//    msg= this.state.login? "<h1>hello naveen  Kumar</h1> ": "<h1>hello user </h1>"
msg= this.state.login?"hello naveen  Kumar" : "hello user "
  

return <h1>{msg}</h1>; 
  }
 

}
