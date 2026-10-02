
import Login from '../pages/Login'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'
import About from '../pages/About'
import HowItWorks from '../pages/HowItWorks'
import Help from '../pages/Help'
import Home from '../pages/Home'

const PublicRoute = [
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
      path: "/forgot-password",
      element: <ForgotPassword />
  },
  {
    path: "/about",
    element: <About />
  },
  { 
     path: "/how-it-works",
     element: <HowItWorks />
  },
  {
    path: "/help",
    element: <Help />
  }
  
]

export default PublicRoute