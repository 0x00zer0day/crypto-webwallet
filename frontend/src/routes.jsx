import App from './App.jsx'
import Login from './login.jsx'

export const routes = [
  {
    path:"/",
    element: <App/>
  },

  {
    path:"/login",
    element: <Login/>
  }
]
