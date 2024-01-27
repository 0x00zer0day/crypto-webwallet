import React from 'react'
import './index.css'

const Login = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full border-2 border-custom-light rounded-lg md:mt-0 sm:max-w-lg xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 rounded-lg">
            <h1 className="text-2xl text-custom-light font-bold leading-tight tracking-tight">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-md font-medium tracking-tight text-custom-light">Your Email</label>
                <input type="email" name="email" id="email" className="bg-gray-500 border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg placeholder-gray-400 focus:ring-custom-light focus:border-custom-light block w-full p-2.5" placeholder="email@company.com" required=""/>
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-md font-medium tracking-tight text-custom-light">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-500 p-2.5 block rounded-lg w-full border-2 border-gray-500 focus:ring-custom-light focus:border-custom-light placeholder-gray-400"/>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 accent-custom-blue bg-green-500" required=""/>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
