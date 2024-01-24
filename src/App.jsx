import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <div id="nav">
        <nav>
          <div className="row">
            <div className="col-12"></div>
            <div className="col-12">
              <ul className="flex">
                <button className="p-2 m-2 bg-sky-500 rounded-3xl text-white">
                  <Link to="/signup" className="bg-sky-500">Sign Up</Link>
                </button>
                <button className="p-2 m-2 bg-sky-500 rounded-3xl text-white">
                  <Link to="/login" className="bg-sky-500">Log In</Link>
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default App
