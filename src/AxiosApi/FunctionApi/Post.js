import React, { useState } from 'react'
import  axios from'axios'
import '../Api.css';
const Post = () => {
    const [id,setId]=useState();
    const [name ,setName]=useState();
    const [salary ,setSalary]=useState();
  let postStudentdata=((e)=>{
e.preventDefault()

axios.post("http://localhost:4000/employees",{id,name,salary})
.then((res)=>{
alert('student added sucessfully.......')

setId("");
setName("");
setSalary("");

})
.catch((e)=>{
console.log(e);
})
    })


  return (
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
            <button name='police' value="ADDSTUDENT" onClick={postStudentdata}>Add student</button>
           </div>
         </form>
    </div>
  )
}

export default Post