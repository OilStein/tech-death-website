import { useState } from "react"
import DevForm from "./DevForm"
import DevPost from "./DevPost"

const DevLog = () => {
  const [form, showForm] = useState(true)

  return (
    <div>
      <button onClick={() => form ? showForm(false) : showForm(true)} >
        <h1 className="text-5xl pt-2 hover:text-yellow-600">DevLog</h1>
      </button>
      <div>
        {form ? <DevForm/> : <></> }
        <DevPost/>
      </div>
    </div>
  )
}

export default DevLog