import React from "react"
import { useGetAllPostsQuery } from "../../services/posts"
import { Link } from "react-router-dom"
import "./Posts.styles.scss"

function Posts() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetAllPostsQuery()
  return (
    <>
      <Link to={"/"} className="link">
        Jump to Home
      </Link>
      <div className="posts">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <ul>
            {data.map((postObj) => (
              <li className="post">
                <p className="heading">{postObj.title}</p>
                <p>{postObj.body}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  )
}

export default Posts
