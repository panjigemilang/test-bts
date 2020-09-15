import React from "react"

const AuthContext = React.createContext({
  isAuthentication: false,
  userData: {},
  setAuthentication: () => {},
  setUserData: () => {},
})

export { AuthContext }
