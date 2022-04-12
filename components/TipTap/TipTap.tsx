import { useEditor, EditorContent } from '@tiptap/react'
import MenuBar from './MenuBar'
import Document from '@tiptap/extension-document'
import PlaceHolder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = ({state}: any) => {
  const CustomDocument = Document.extend({
    content: 'heading block'
  })

  const editor = useEditor({
    extensions: [
      CustomDocument,
      StarterKit.configure({
        document: false,
      }),
      PlaceHolder.configure({
        placeholder: ({node}) => {
          if (node.type.name === 'heading') {
            return 'Set Title'
          }
          return 'What you learned today?'
        }
      }),
    ],
    editorProps: {
      attributes: {
        class: '' 
      }
    },
    content: '',
    onUpdate: ({editor}) => {
      state(editor.getJSON())
    }
  })


  return (
    <div className='border-2 rounded-xl bg-slate-500 pt-2 m-4 min-h-15'>
      <MenuBar editor={editor} className=''/>
      <EditorContent editor={editor} className='text-left p-2 prose overflow-auto mx-auto'/>
    </div>
  )
}


export default Tiptap;