import { useUser } from "@auth0/nextjs-auth0"
import type { NextPage } from "next"
import BlogForm from "../components/Blog/BlogForm"

const Blog: NextPage = () => {
  //const {user} = useUser()

  return (
    <div>
      {/*!user ? <BlogForm/> : null*/}
      <BlogForm></BlogForm>
    </div>
  )
}

export default Blog