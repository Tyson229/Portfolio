import { useState } from 'react'
import Introduction from './containers/introduction/Introduction'
import NavBar from './components/navBar/NavBar'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Introduction></Introduction>
    </div>
  )
}

export default App
