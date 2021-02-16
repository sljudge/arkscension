import React from 'react'
import ReactDOM from 'react-dom';
import EditorJS from './components/EditorJS'

if (document.getElementById('editorjs')) {
    ReactDOM.render(<EditorJS />, document.getElementById('editorjs'));
}
