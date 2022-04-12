import type { NextComponentType } from "next"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout: NextComponentType = ({children}) => {
  return (
    <div className=" text-white font-mono bg-zinc-900">
      <div className="container mx-auto text-center max-w-5xl pt-6">
        <Nav/>
          <main className="">{children}</main>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout