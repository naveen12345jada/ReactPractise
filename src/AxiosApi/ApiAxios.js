import axios from 'axios'
import React, { Component } from 'react'
import './Api.css'

export default class ApiAxios  extends Component {
    constructor(){
        super()
        this.state={
            students:[]
        }
    }
    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then( (res)=>{
        this.setState({
           students:res.data
        })
      })
      .catch((e)=>{
        console.log(e)
      }  
      )
    }
  render(){
    let students=this.state.students
    return (
      <>
      <table>
        <thead>
          <tr>
        <th>userId</th>
        <th>id</th>
        <th>title</th>
        <th>body</th>
        </tr>
        </thead>
        <tbody>
          

      {
     students.map((stu)=>{
      return (
        <tr key={stu.id}>
        <td> <p>{stu.userId}</p></td>
       <td> <p>{stu.id}</p></td>
       <td> <p>{stu.title}</p></td>
       <td> <p>{stu.body}</p></td>
       </tr>
      )
     })
     }
    
     </tbody>
     </table>

     <div class="naveen">
      <p>hello naveen</p>
     </div>
      </>
    )
  }
}
