import { useState } from "react"
import Tiptap from "../TipTap/TipTap"

const DevForm = () => {
  const [text, setText] = useState()
  
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    console.log(text)
    
  }

  return (
    <div>
      <Tiptap state={setText}></Tiptap>
      <button value={text} onClick={handleSubmit}>Send</button>
    </div>
  )
}

export default DevForm