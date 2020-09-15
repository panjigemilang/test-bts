import React, { useEffect, useMemo, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AuthContext } from "./context"
import setAuthToken from "./utils/setAuthToken"
import "./app.scss"

// Components
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Dashboard from "./components/Pages/Dashboard"
import Landing from "./components/Pages/Landing"
import PrivateRoute from "./utils/PrivateRoute"
import Navbar from "./components/Layouts/Navbar"

function App() {
  const [isAuthentication, setAuthentication] = useState(false)
  const [userData, setUserData] = useState({})

  const contextProvider = useMemo(
    () => ({
      isAuthentication,
      setAuthentication,
      userData,
      setUserData,
    }),
    [isAuthentication, setAuthentication, userData, setUserData]
  )

  useEffect(() => {
    if (localStorage.jwtToken) {
      // set token to authorization
      setAuthToken(localStorage.jwtToken)
      // set current user and isAuthenticated
      setUserData(localStorage.jwtToken)
      setAuthentication(true)
    }
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={contextProvider}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
