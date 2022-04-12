import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar'

const TipTap = ({state}: any) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: ``,
    onUpdate: ({editor}) => {
      state(editor.getJSON())
    }
  })

  return (
    <div className='bg-[#363a40] rounded-xl'>
      <MenuBar editor={editor}/>
      <EditorContent editor={editor} className="prose prose-invert mx-auto text-left overflow-auto" />
    </div>
  )
}

export default TipTap