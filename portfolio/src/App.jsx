import { useState } from 'react'
import Home from './containers/home/Home'
import About from './containers/about/About';
import { BrowserRouter,Routes, Route} from "react-router-dom";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/about' element ={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
