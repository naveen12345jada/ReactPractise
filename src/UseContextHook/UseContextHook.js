import React,{createContext, useContext, useState} from 'react'




const UserContext=createContext()
const UseContextHook = () => {
    let [name,setName]=useState("naveen")
  return (
    <div>
        <UserContext.Provider value={name}>
      <h1>{name}</h1>
<Component1 ></Component1>
</UserContext.Provider> 
    </div>
  )
}

export default UseContextHook


//   const Component1=(props)=>{
//     return(
//         <>
//         <h1>component1:</h1>
//         <Component2 name1={props.nam}></Component2>
//         </>
//     )
// }

// const Component2=(props)=>{
//     return(
//         <>
//     <h1>component2:{props.name1}</h1>
//        <Component3 name2={props.name1} ></Component3>
//     </>
//     )
// }

// const Component3=(props)=>{
//     return(
//         <h1>Component3:{props.name2}</h1>
//     )
// }

// const Component1=({name1})=>{
//     return(
//         <>
//         <h1>component1:{name1}</h1>
//         <Component2 name2={name1}></Component2>
//         </>
//     )
// }

// const Component2=({name2})=>{
//     return(
//         <>
//     <h1>component2:{name2}</h1>
//        <Component3 name4={name2} ></Component3>
//     </>
//     )
// }

// const Component3=({name4})=>{
//     return(
//         <>
//         <h1>Component3:{name4}</h1>
//         <Component4 name5={name4}></Component4>
//         </>
//     )
// }



// const Component4=({name5})=>{
//     return(
//         <h1>component5: {name5}</h1>
//     )
// }


// const Component1=({name1})=>{
//     return(
//         <>
//         <h1>component1:</h1>
//         <Component2 name2={name1}></Component2>
//         </>
//     )
// }

// const Component2=({name2})=>{
//     return(
//         <>
//     <h1>component2:</h1>
//        <Component3 name4={name2} ></Component3>
//     </>
//     )
// }

// const Component3=({name4})=>{
//     return(
//         <>
//         <h1>Component3:{name4}</h1>
//         <Component4 name5={name4}></Component4>
//         </>
//     )
// }



// const Component4=({name5})=>{
//     return(
//         <h1>component5: {name5}</h1>
//     )
// }





const Component1=()=>{
    return(
        <>
        <h1>component1:</h1>
        <Component2 ></Component2>
        </>
    )
}

const Component2=()=>{
    return(
        <>
    <h1>component2:</h1>
       <Component3  ></Component3>
    </>
    )
}

const Component3=()=>{
    return(
        <>
        <h1>Component3:</h1>
        <Component4 ></Component4>
        </>
    )
}



const Component4=()=>{
    let name=useContext(UserContext)
    return(
        <h1>component5:{name} </h1>
    )
}






