import { useState } from "react"
import Tiptap from "../TipTap/TipTap"

const DevForm = () => {
  const [text, setText] = useState()
  
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    console.log(text)
    
  }

  return (
    <div className="border-b-2 pb-4 mb-4 mx-2">
      <Tiptap state={setText}></Tiptap>
      <button value={text} onClick={handleSubmit} className='text-3xl border rounded-lg p-2 mt-2 hover:text-yellow-600'>Send</button>
    </div>
  )
}

export default DevForm