import React from "react"
import { Router } from "@reach/router"
import Layout from "./../components/layout"

const Profile = () => <h2>Profile</h2>
const Stats = () => <h2>Stats</h2>

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Profile path="/profile" />
        <Stats path="/stats" />
      </Router>
    </Layout>
  )
}

export default App
