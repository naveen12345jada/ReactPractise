import { buy_laptop } from "./LaptopAction";


const initialstate={
    noOFLaptops:30
}

const LaptopReducer=(state=initialstate,action)=>{
    switch(action.type){
        case buy_laptop:
            return{
                noOFLaptops:state.noOFLaptops-action.payload
            }
            default:
                return state;
    }
}


export default LaptopReducer;