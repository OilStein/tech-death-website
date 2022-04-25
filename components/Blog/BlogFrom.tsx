import { SyntheticEvent, useState } from "react";

const BlogForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    const data = { ...formData };

    empty();

    const res = await fetch("/api/blogs", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
  };

  const empty = () => {
    console.log("Nulling");
    setTitle("")
    setText("")
  }

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }



  return (
    <div className="py-2 container p-2 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center items-center">
        <input
          onChange={handleTitle}
          value={title}
          type="text"
          name="title"
          placeholder="Title.."
          className="border-2 rounded-lg border-violet-700 focus:border-red-800 bg-zinc-500 p-2 w-1/2"
        />
        <textarea
          onChange={handleText}
          value={text}
          name="text"
          className="border-2 rounded-lg border-violet-700 focus:border-red-800 bg-zinc-500 p-2 w-1/2 h-36"
        />

        <button
          type="submit"
          className="border-4 rounded-lg bg-zinc-600 border-violet-700 hover:border-violet-900 px-2 py-1 mx-auto text-red-900 font-bold text-xl"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
