import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password}),
      })

      if(!response.ok){
        throw new Error('Login Failed!')
      }

      const data = await response.json();
      console.log('Logged in successfully:', data)
    } catch(error) {
      console.error('Error logging in:', error)
    }
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full border border-gray-500 shadow-2xl rounded-lg md:mt-0 sm:max-w-lg xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 rounded-lg">
            <h1 className="text-2xl text-custom-light font-bold leading-tight tracking-tight">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-md font-bold tracking-tight text-custom-light">Your Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                       className="bg-gray-500 border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg placeholder-gray-400 focus:ring-custom-light focus:border-custom-light block w-full p-2.5" placeholder="email@company.com" required=""/>
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-md font-bold tracking-tight text-custom-light">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-500 p-2.5 block rounded-lg w-full border-2 border-gray-500 focus:ring-custom-light focus:border-custom-light placeholder-gray-400"/>
              </div>
              <div className="pt-5">
                <button type="submit" className="w-full text-custom-light bg-custom-blue p-2.5 rounded-lg text-md hover:text-custom-dark hover:bg-custom-light font-bold">
                  Sign In
                </button>
              </div>
              <p className="text-gray-400 font-light">Don't have an account yet? <Link to="/signup" className="font-bold text-custom-blue hover:text-custom-light"> Sign up</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
