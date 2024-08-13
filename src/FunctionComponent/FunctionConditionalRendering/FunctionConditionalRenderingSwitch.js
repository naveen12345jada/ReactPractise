import React from 'react'

const FunctionConditionalRenderingSwitch = () => {
    let choice = 9;
    let msg;
    switch (choice) {
        case 1:
            msg = <h1>hello123naveen</h1>
            break;
        case 2:
            msg = <h1>hello15020</h1>
            break
        case 3:
            msg = <h1>hello1</h1>
            break
        case 4:
            msg = <h1>hellowelcome</h1>
            break
        default:
            return msg = <h1>invalid</h1>

    }
    return (
        <div>FunctionConditionalRenderingSwitch

            {
  msg
            }
        </div>
    )
}

export default FunctionConditionalRenderingSwitch