import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context"
import { Link, withRouter } from "react-router-dom"
import { ChecklistApi } from "../../services"
import setAuthToken from "../../utils/setAuthToken"
import "../../dist/login.scss"

function Login({ history }) {
  const { isAuthentication, setAuthentication, setUserData } = useContext(
    AuthContext
  )
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      username,
      password,
    }

    // Login
    ChecklistApi.login(userData).then((res) => {
      // Save to local storage
      const { token } = res.data
      // set token to local storage
      localStorage.setItem("jwtToken", token)
      // Set token to Auth Header
      setAuthToken(token)
      setUserData(token)
      setAuthentication(true)
    })
  }

  useEffect(() => {
    if (localStorage.jwtToken) history.push("/dashboard")
  }, [isAuthentication])

  return (
    <div className="login-app">
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1>Login Form</h1>
          <input
            type="text"
            value={username}
            placeholder="Masukkan username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Masukkan password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            Belum mendaftar ? klik <Link to="/register">disini</Link> untuk
            mendaftar
          </p>
        </form>
      </div>
    </div>
  )
}

export default withRouter(Login)
