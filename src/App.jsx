import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <div id="nav">
        <nav className="grid grid-cols-2">
          <div></div>
          <div className="flex justify-end mr-10 mt-5">
            <button
              className="p-2 pl-6 pr-6 m-2 border-2 border-custom-light rounded-3xl text-custom-light hover:bg-custom-light hover:text-custom-dark">
              <Link to="/login" className="bg-transparent">Log In</Link>
            </button>
            <button className="p-2 pl-5 pr-5 m-2 border-2 border-custom-light rounded-3xl text-custom-light hover:bg-custom-light hover:text-custom-dark">
              <Link to="/signup" className="bg-transparent">Sign Up</Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default App
