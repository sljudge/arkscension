// import Header from '@editorjs/header'
// import Link from '@editorjs/link'
// import List from '@editorjs/list'
// import Quote from '@editorjs/quote'
// import Table from '@editorjs/table'
// import Paragraph from '@editorjs/paragraph'

import Banner from './Banner'
import Images from './Images'
import Paragraph from './Paragraph'
import Header from './Header'
import Table from './Table'
import List from './List'
import Mandala from './Mandala'

export default {
    text: Text,
    header: Header,
    paragraph: { class: Paragraph, inlineToolbar: true },
    banner: Banner,
    images: Images,
    table: Table,
    list: { class: List, inlineToolbar: true },
    mandala: { class: Mandala, inlineToolbar: true },
}
