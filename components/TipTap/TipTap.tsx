import { useEditor, EditorContent } from '@tiptap/react'
import MenuBar from './MenuBar'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Code from '@tiptap/extension-code'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import Heading from '@tiptap/extension-heading'
import CodeBlock from '@tiptap/extension-code-block'
import BlockQuote from '@tiptap/extension-blockquote'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import History from '@tiptap/extension-history'

import Link from '@tiptap/extension-link'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Code,
      BulletList,
      Heading,
      ListItem,
      CodeBlock,
      BlockQuote,
      HorizontalRule,
      Link,
      History
    ],
    editorProps: {
      attributes: {
        class: '' 
      }
    },
    content: '<h1>Lorem ipsum<h1> dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae, dicta mollitia alias fugiat et accusantium corrupti nihil. Ipsam autem omnis quas fugiat eligendi voluptates architecto dolor alias? Suscipit, maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum odio nemo delectus sapiente non cumque. Autem atque non, tenetur, eaque et beatae, itaque obcaecati inventore libero necessitatibus cumque! Dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, magnam rem illo pariatur ducimus doloribus perspiciatis dolor quod accusantium nihil consequuntur, iste odit quo esse consectetur possimus expedita minus quidem!',
  })

  return (
    <div className='border-2 rounded-xl bg-slate-500 pt-2 m-4 '>
      <MenuBar editor={editor}/>
      <EditorContent editor={editor} className='container text-left p-2'/>
    </div>
  )
}

export default Tiptap;