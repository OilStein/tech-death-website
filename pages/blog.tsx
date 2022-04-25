import type { NextPage } from "next";
import BlogForm from "../components/Blog/BlogFrom"
import Skull from '../public/assets/svg/skull.svg'

const Blog: NextPage = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      
      <div className="flex-grow-0 pt-10">
        <Skull fill="rgb(76, 29, 149)" height={100} />
      </div>

      <BlogForm></BlogForm>

    </div>
  );
};

export default Blog;
