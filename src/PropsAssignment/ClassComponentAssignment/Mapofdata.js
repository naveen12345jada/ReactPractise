import React, { Component } from 'react'

export default class Mapofdata extends Component {


//     constructor(){
//         super();
//         this.state={
//           names:  ["naveen",20,"delhi","05-12-1999",67,"calcutta","india"]
//     }
// }
//   render() {
//     return (
//       <div style={{color:"white"}}>
//         {
//     this.state.names.map((data)=>{
//      return <h1>{data}</h1>
//     }
// )
//       }</div>
//     )
//   }

// render(){
//     return(
//         this.state.names.map((data)=>
//            <h1 style={{color:"white"}}>{data}</h1>
//         )
//     )
// }
// }
render(){
    let names= ["naveen",20,"delhi","05-12-1999",67,"calcutta","india","kolkatt"]
    return(
        
        names.map((data,index)=>{
           return <h1 key={index} >{data}</h1>
        }
        )
    )
}
}