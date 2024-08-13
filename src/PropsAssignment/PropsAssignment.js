import React from 'react'
import "./props.css"

const PropsAssignment = (props) => {
  return (

    <>
       
  
    <div id='container'>
    
        <div id='MovieContainer'style={{height:"auto"}}>
            <img src={props.url} alt=''></img>
            <h6>Movie{" "+props.name}</h6>
            <h6>rating{" "+props.rating}</h6>
            <h6>Likes{" "+props.Likes}</h6>
            <button >Book Ticket </button>

        </div>
    </div>
    </>
  )
}

export default PropsAssignment