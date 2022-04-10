const MenuBar = ({editor}: any) => {
  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-wrap justify-center">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'font-semibold text-yellow-500 border rounded-md p-1 m-1' : 'border rounded-md p-1 m-1'}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'font-semibold text-yellow-500 border rounded-md p-1 m-1' : 'border rounded-md p-1 m-1'}
      >
        code
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'font-semibold text-yellow-500 border rounded-md p-1 m-1' : 'border rounded-md p-1 m-1'}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'font-semibold text-yellow-500 border rounded-md p-1 m-1' : 'border rounded-md p-1 m-1'}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'font-semibold text-yellow-500 border rounded-md p-1 m-1' : 'border rounded-md p-1 m-1'}
      >
        h2
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'font-semibold text-yellow-500 border rounded-md p-1 m-1' : 'border rounded-md p-1 m-1'}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'font-semibold text-yellow-500 border rounded-md p-1 m-1' : 'border rounded-md p-1 m-1'}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'font-semibold text-yellow-500 border rounded-md p-1 m-1' : 'border rounded-md p-1 m-1'}
      >
        blockquote
      </button>
      <button 
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={editor.isActive('blockquote') ? 'font-semibold text-yellow-500 border rounded-md p-1 m-1' : 'border rounded-md p-1 m-1'}
        >
        horizontal rule
      </button>
    </div>
  )

}

export default MenuBar