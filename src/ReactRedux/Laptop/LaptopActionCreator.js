import { buy_laptop } from "./LaptopAction"


function buyLaptop(num){
return{
    type:buy_laptop,
    payload:num
}
}

export default   buyLaptop