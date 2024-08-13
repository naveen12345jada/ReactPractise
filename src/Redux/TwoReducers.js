import { combineReducers, configureStore } from "@reduxjs/toolkit";

const buy_mobile = 'Buy_Mobile'; //action
const buy_laptop="Buy_Laptop"; //action


function buymobile() {
  // action creator
  return {
    type: buy_mobile,
  };
}

function buyLaptop(){
    // action creator
    return{
        type:buy_laptop,
    }
}


const intialLaptopState={
  // intial Laptop State 
  noOfLaptops:60,
}


const intialMobileState = {
  //initial mobile state
  noOfMobiles: 40,
};


const LaptopReducer=(state=intialLaptopState,action)=>{
    if(action.type==buy_laptop){
        return{
        noOfLaptops: state.noOfLaptops-1
        }
    }
    else{
        return state
    }
}

const mobileReducer = (state = intialMobileState, action) => { //reducer creation  
  switch (action.type) {
    case buy_mobile:
      return {
        noOfMobiles: state.noOfMobiles - 1,
      };

    default:
      return state
     
  }
};

const combinedreducer=combineReducers({mobiles:mobileReducer,laptops:LaptopReducer})
const store =configureStore({reducer:combinedreducer})
console.log("initial count is ",store.getState());

store.subscribe(()=>
    {console.log("updated count is ", store.getState())
    })
    
    
    
store.dispatch(buyLaptop())
store.dispatch(buyLaptop())
 store.dispatch(buymobile())
 store.dispatch(buymobile())
 store.dispatch(buymobile())
 store.dispatch(buymobile())

 store.dispatch(buyLaptop())