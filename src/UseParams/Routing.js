import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Details from './Details'
import Useparams from './Useparams'

const Routing = () => {
  return (
    <div>
        
<BrowserRouter>
<Routes>
    <Route path='/' element={<Useparams></Useparams>}></Route>
    <Route path='/details/:id' element={<Details></Details>}></Route>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default Routing