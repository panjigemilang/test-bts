import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"

function Landing({ history }) {
  useEffect(() => {
    history.push("/login")
  }, [])

  return <div className="landing-app">... Redirect to login</div>
}

export default withRouter(Landing)
