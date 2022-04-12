import { useState } from "react"
import DevForm from "./DevForm"

const DevLog = () => {
  const [form, showFrom] = useState(true)
  return (
    <div>
      <h1 className="text-5xl pt-2">DevLog</h1>
      {form ? <DevForm/> : <></> }
    </div>
  )
}

export default DevLog