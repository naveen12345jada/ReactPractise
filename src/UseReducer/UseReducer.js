import React, { useReducer } from 'react'
 



const initialstate={
    counter:0,
}



 const UseReducer = () => {
  
    const[state,dispatch]=useReducer(reducer1,initialstate)
   
    


  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={()=>dispatch({type:"add"})}>+</button>
      <button onClick={()=>dispatch({type:"sub"})}>-</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>

    </div>
  )
}


const reducer1=(state=initialstate,action)=>{
    switch(action.type){
        case "add":
            return{
            counter:state.counter+1
            }
            case "sub":
                return{ 
                counter:state.counter-1
                }
                case "reset":
                    return{ 
                    counter:0
                    }
    }

}
     

export default UseReducer