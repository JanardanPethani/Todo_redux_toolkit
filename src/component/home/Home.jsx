import React from "react"
import "./Home.styles.scss"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <Link to={"list"} className="link">
        Jump to Todo List
      </Link>
      <Link to={"posts"} className="link">
        Jump to Posts
      </Link>
    </div>
  )
}

export default Home
