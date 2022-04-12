import type { NextComponentType } from "next"
import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0"

const Nav: NextComponentType = () => {
  const {user} = useUser()

  const titles = ["Blog", "Contact", "DevLog"]

  return (
    <header className="flex flex-wrap gap-4 justify-center mx-2 my-2 pb-4 pt-2 border-b-2">
      <div className="px-2 border-2 rounded-md w-40 hover:text-yellow-500">
        <Link href="/"><a>Home</a></Link>
      </div>
      
      {titles.map(title => {
        return (
          <div key={title} className="px-2 border-2 rounded-md w-40 hover:text-yellow-500">
            <Link href={"/"+title.toLowerCase()}><a>{title}</a></Link>
          </div>
        )
      })}
      
      {user
        ?
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        :<></>
      }
      {!user
        ?
        <div className="px-2 border-2 rounded-md w-40 hover:text-yellow-500">
          <a href="/api/auth/login">Login</a>{/*eslint-disable-line*/}
        </div>
        :
        <div className="px-2 border-2 rounded-md w-40 hover:text-yellow-500">
          <a href="/api/auth/logout">Logout</a>{/*eslint-disable-line*/}
        </div>
      }
    </header>

  )
}

export default Nav