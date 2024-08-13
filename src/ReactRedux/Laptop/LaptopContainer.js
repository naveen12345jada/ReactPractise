import React, { useState } from 'react'
import { connect } from 'react-redux'
import buyLaptop from './LaptopActionCreator'

const LaptopContainer = (props) => {
  const [number,setNumber]=useState(10)
  return (
    <div>
    <h1>NoOfLaptops :{props.noOFLaptops} </h1>
    <input type='text' name="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    <button onClick={()=>props.buyLaptop(number)}>BuyNow</button>
    </div>
  )
}

const mapStateToProps=((state)=>{
  return{
    noOFLaptops:state.laptop.noOFLaptops
  }
})

const mapDispatchToProps=(dispatch)=>{
  return{
    buyLaptop:(number)=>{
      dispatch(buyLaptop(number))
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps) (LaptopContainer)