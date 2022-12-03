import { useState } from 'react'
import Introduction from './containers/introduction/Introduction'
import NavBar from './components/navBar/NavBar'
import About from './containers/about/About'
import Project from './containers/projects/Project'
import { BrowserRouter,Routes, Route} from "react-router-dom";
function App() {

  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element ={<Introduction/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
