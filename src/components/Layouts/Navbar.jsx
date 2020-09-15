import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { ChecklistApi } from "../../services"
import { AuthContext } from "../../context"
import "../../dist/navbar.scss"

export default function Navbar() {
  const { setUserData, setAuthentication } = useContext(AuthContext)
  const [location, setLocation] = useState("/")
  const history = useHistory()

  useEffect(() => {
    return history.listen((location) => setLocation(location.pathname))
  }, [history])

  const onLogout = (e) => {
    e.preventDefault()

    ChecklistApi.logout()
    setUserData({})
    setAuthentication(false)
  }

  return (
    <nav
      className={`navbar-app ${
        location.includes("login") || location.includes("register")
          ? "hide"
          : ""
      }`}
    >
      <ul>
        <li>Logo</li>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </nav>
  )
}
