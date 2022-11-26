import { useState } from 'react'
import Introduction from './containers/introduction/Introduction'
import NavBar from './components/navBar/NavBar'
import About from './containers/about/About'
import Project from './containers/projects/Project'

function App() {

  return (
    <div>
      <Introduction></Introduction>
      <About></About>
      <Project></Project>
    </div>
  )
}

export default App
