import type { NextComponentType } from "next";
import Link from "next/link";

const Nav: NextComponentType = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mx-2 my-2">
      <div className="px-2 border-2 rounded-md w-40">
        <Link href="/"><a>Home</a></Link>
      </div>
      <div className="px-2 border-2 rounded-md w-40">
        <Link href="/blog"><a>Blog</a></Link>
      </div>
      <div className="px-2 border-2 rounded-md w-40">
        <Link href="/contact"><a>Contact</a></Link>
      </div>
    </div>

  )
}

export default Nav