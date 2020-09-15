import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { ChecklistApi } from "../../services"
import "../../dist/register.scss"

export default function Register() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      username,
      password,
    }

    // Register
    ChecklistApi.register(userData).then(() => history.push("/login"))
  }

  return (
    <div className="register-app">
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1>Register Form</h1>
          <input
            type="text"
            value={email}
            placeholder="Masukkan email"
            onChange={(e) => setEmail(e.target.value)}
          />
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
          <button type="submit">Register</button>
          <p>
            Sudah memiliki akun? silahkan <Link to="/login">disini</Link>.
          </p>
        </form>
      </div>
    </div>
  )
}
