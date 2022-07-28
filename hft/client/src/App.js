import React, { useContext } from "react";
import Footer from "./components/Footer";
import Profile from "./components/pages/Profile";
import Workout from "./components/pages/Workout";
import Community from "./components/pages/Community";
import { UserContext } from "./context/UserProvider";
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute'
import Auth from './components/Auth'


const App = () => {

  const {logout, token} = useContext(UserContext)

  return (
    <div className="app">
      {token && <Navbar logout={logout} token={token}/>}
      <Routes>
        <Route 
          exact path='/'
          element={token ? <Navigate to='/profile'/> : <Auth />}
        />
        <Route 
          path='/profile'
          element={<ProtectedRoute token={token} redirectTo='/'>
            <Profile />
          </ProtectedRoute>}
        />
        <Route 
          path='/workout'
          element={<ProtectedRoute token={token} redirectTo='/'>
            <Workout />
          </ProtectedRoute>}
        />
        <Route 
          path='/community'
          element={<ProtectedRoute token={token} redirectTo='/'>
            <Community />
          </ProtectedRoute>}
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App