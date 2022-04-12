import type { NextComponentType } from "next";
import Link from "next/link"

const Footer: NextComponentType = () => {
  return (
    <footer className="mt-2 p-2 mr-6 bottom-0">
      <div className="flex justify-end space-x-4">
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