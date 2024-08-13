
import React, { Component } from 'react';

export default class ClassComponent extends Component {
    //  name() {
    //     console.log("hello")
    //    }

    constructor() {
        super();
        this.state = {
            name12: "naveen",
            age: 12
        }
    }
//    changeData=()=> {
//         this.setState({
//             name12: "hyderabad",
//             age: 13,
//             address:"delhi",
//         });

//     };

    changeData=(d)=> {
        this.setState({
            name12: d.name12,
            age: d.age,
            address:d.address,
        });

    };

    

    render() {

        return (
            <>
                 <h1 >Hello {this.props.name}</h1> 
                <h1>Hello {this.state.name12} age is {this.state.age} and address is {this.state.address}</h1>
                <button onClick={()=>this.changeData({name12:"naveem",age:12,address:"delhi"})}>clickme</button>


            </>
        )
    }
}