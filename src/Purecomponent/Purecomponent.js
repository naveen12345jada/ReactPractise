import { PureComponent } from "react";


class Purecomponent extends PureComponent{
    constructor(props) {
      super(props)
    
      this.state = {
         name:"elearn"
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
              name  :"naveen"
            })
        },2000)
    }
    render(){
        return(
            <>
            {console.log("testcomp") }
            {this.state.name}
            </>
        )
    }
}

export default Purecomponent;