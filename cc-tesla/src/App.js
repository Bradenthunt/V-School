import React, { useContext } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Battery from "./pages/Battery"
import Climate from "./pages/Climate"
import Controls from "./pages/Controls"
import Overview from "./pages/Overview"
import SignIn from "./pages/SignIn"
import { Context } from "./components/Context"

export default function App() {

  const {accessToken} = useContext(Context)

  const linkStyling = {
    textDecoration: 'none', 
    color: 'maroon',
    fontWeight: 'bold'
  }

  return (
    <div className="App">
      <Header />
      
      {accessToken && <nav>
        <Link to="/" style={linkStyling}>
          Sign In
        </Link>
        <Link to="/overview" style={linkStyling}>
          Overview
        </Link>
        <Link to="/controls" style={linkStyling}>
          Controls
        </Link>
        <Link to="/climate" style={linkStyling}>
          Climate
        </Link>
        <Link to="/battery" style={linkStyling}>
          Battery
        </Link>
      </nav>}
      <main>
        <Routes>
          <Route 
            exact path='/'
            element={accessToken ? <Navigate to='/overview'/> : <SignIn />}
          />
          <Route 
            path='/overview'
            element={<ProtectedRoute token={accessToken} redirectTo='/'>
              <Overview />
            </ProtectedRoute>}
          />
          <Route 
            path='/controls'
            element={<ProtectedRoute token={accessToken} redirectTo='/'>
              <Controls />
            </ProtectedRoute>}
          />
          <Route 
            path='/climate'
            element={<ProtectedRoute token={accessToken} redirectTo='/'>
              <Climate />
            </ProtectedRoute>}
          />
          <Route 
            path='/battery'
            element={<ProtectedRoute token={accessToken} redirectTo='/'>
              <Battery />
            </ProtectedRoute>}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}