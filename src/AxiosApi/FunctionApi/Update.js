import React, { useEffect, useState } from 'react'
import '../Api.css'
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css'
const Update = () => {
  const [student, setStudent]= useState([]);
  const [id,setId]=useState();
  const [name ,setName]=useState();
  const [salary ,setSalary]=useState();
  useEffect(()=>{
    axios.get("http://localhost:4000/employees")
    .then((res)=>{
      setStudent(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  let editData=(id)=>{
    axios.get(`http://localhost:4000/employees/${id}`)
    .then((res)=>{
      setId(res.data.id);
      setName(res.data.name)
      setSalary(res.data.salary)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


 let  editStudentdata=(e)=>{
  e.preventDefault();
  axios.put(`http://localhost:4000/employees/${id}`,{id,name,salary})
  .then((res)=>{
  alert("student updated sucessfully... ")
  setId("");
      setName("")
      setSalary("")
  })
  .catch((err)=>{
    console.log(err)
  })
   }


  return (
<>
    <div style={{marginBottom:40}}>
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
             student.map((stu)=>{
              return(
                <tr key={stu.id}>
                 <td >{stu.id}</td>
                 <td >{stu.name}</td>
                 <td >{stu.salary}</td>
                 <td >
                        <button className="btn btn-info" onClick={()=>{editData(stu.id)}}>  
                        <i class="bi bi-pencil"></i> 
                        </button>
                      </td>
                    </tr> 
              )
             })
           }
          </tbody>
       </table>
    </div>
 
 <div>
 <div className='form'>
         <form >
           <div>
            <input type='text' name='id' placeholder='id' value={id} onChange={(e)=>{
              setId(e.target.value)
            }}></input>
           </div>
           <div>
            <input type='text' name='name' placeholder='Entername' value={name} onChange={(e)=>{
                setName( e.target.value)
            }}
          
            ></input>
           </div>
           <div>
            <input type='text' name='salary' placeholder='Entersalary' value={salary} onChange={(e)=>{
                setSalary( e.target.value)
            }}></input>
           </div>
           <div style={{marginTop:30}}>
            <button name='police' value="ADDSTUDENT" onClick={editStudentdata}>Add student</button>
           </div>
         </form>
    </div>
 </div>


    </>
  )
}

export default Update