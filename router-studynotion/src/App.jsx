import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false) ;

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col overflow-x-hidden font-inter">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default App
