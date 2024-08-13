import { buy_mobile } from "./mobileAction";


const initialstate={
    noOFMobiles:60
}

const MobileReducer=(state=initialstate,action)=>{
    switch(action.type){
        case  buy_mobile:
            return{
                noOFMobiles:state.noOFMobiles-action.payload
            }
            default:
                return state;
    }
}


export default  MobileReducer;