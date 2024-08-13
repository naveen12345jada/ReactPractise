import React, { Component } from 'react'

export default class ConditionalSwitchcase extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        choice : 3,
      }
    }
  render() {
  let msg;
    switch(this.state.choice){
        case 1 :
          
            msg= <h1 >This is case1 </h1>
            break;
            case 2:
               
                msg= <h1>This is case2 </h1>
                break;
                case 3:
                    msg= <h1>This is case3 </h1>
                    break;
                    default :
                       return <h1>invalid code </h1>

    }
    return msg;
  }
}
