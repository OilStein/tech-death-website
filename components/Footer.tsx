import type { NextComponentType } from "next";
import Link from "next/link"

const Footer: NextComponentType = () => {
  return (
    <footer className="m-2 p-2 fixed bottom-0">
      <div className="flex gap-4">
        <div className="mr-4">
          <Link href="/about"><a className="hover:underline hover:text-yellow-500">About</a></Link>
        </div>
        <div className="mr-4">
          <Link href="/contact"><a className="hover:underline hover:text-yellow-500">Contact</a></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer