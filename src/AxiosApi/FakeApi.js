
import React, { Component } from 'react'
import axios from 'axios'
import './Api.css'
export default class FakeApi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         student:[],
      }
    }

    componentDidMount(){
       axios.get("http://localhost:4000/employees") 
       .then((res)=>{
        this.setState({
            student: res.data,
        
        })
    })
        .catch((e)=>{
          console.log(e) 
        })
      
    }
  render() {
   let student=this.state.student;
    return (
   <>
     <table>
      <thead>
       <tr>
        <th>id</th>
        <th>name</th>
        <th>salary</th>
       </tr>
       </thead>
       <tbody>

        {
          student.map((emp)=>{
               return(
                <tr key={emp.id}>
               <td>{emp.id}</td>
               <td>{emp.name}</td>
               <td>{emp.salary}</td>
               </tr>
             
               )

              
          }) 
         
        } 
        </tbody>
         </table>  
   </>
    )
  }
}
