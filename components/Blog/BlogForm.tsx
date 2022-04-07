
import { NextComponentType } from "next"
import Rating from "./Rating"

const BlogForm: NextComponentType  = () => {

  const handleSubmit = async (event: any ) => {
    event.preventDefault()

    const form = new FormData(event.target)
    const formData = Object.fromEntries(form.entries())

    console.log(formData)

    const res = await fetch('/api/blogs', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await res.json()
    console.log(result);

  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <input name="owner" type='text' className="hidden"/>
      <input name="time" type='datetime-local' className="hidden"/>

      <input name="title" type='text' className="bg-black" />
      {/* <input name="stars" type='number' min='0' max='5' onInput={this} className="bg-black"/> */}
      <Rating></Rating>
      <input name="genres" type='text' className="bg-black"/>
      <input name="image" type='url' className="bg-black"/>
      <textarea name="description" className="bg-black col-span-2"/>

      <button type="submit">Post</button>
    </form>
  )
}

export default BlogForm