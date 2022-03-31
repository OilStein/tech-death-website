import type { NextComponentType } from "next"
import Nav from "./Nav"
import Footer from "./Footer"
import Image from "next/image"
import vercel from '../public/vercel.svg'

const Layout: NextComponentType = ({children}) => {
  return (
      <div className="container mx-auto text-center">
        <Image src={vercel} alt="logo" width={300} height={100}></Image>
        <Nav/>
        <main>{children}</main>
        <Footer/>
      </div>
  )
}

export default Layout