import type { NextComponentType } from "next"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout: NextComponentType = ({children}) => {
  return (
      <div className="container mx-auto text-center max-w-5xl pt-6">
        <Nav/>
        <main>{children}</main>
        <Footer/>
      </div>
  )
}

export default Layout