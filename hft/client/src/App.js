import React, { useContext } from "react";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Workout from "./components/Workout";
import Community from "./components/Community";
import { UserContext } from "./context/UserProvider";


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
      <Footer />
    </div>
  )
}

export default App