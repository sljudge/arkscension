import React, { useEffect, useState } from "react";
import EditorJs from "react-editor-js";
import TOOLS from '../tools'
//components
import { Nav } from './Nav'
import { MainBtn } from './Misc'

const EditorJS = props => {
    const [editor, setEditor] = useState({})
    const [pages, setPages] = useState([])
    const [activePage, setActivePage] = useState()

    const getData = async () => {
        const response = await fetch('/api/pages')
        const data = await response.json()
        data.forEach(page => {
            page.blocks = page.blocks ? JSON.parse(page.blocks) : []
        })
        setPages(data)
    }

    const handleSaveClick = async () => {
        const data = await editor.save()
        const blockString = await JSON.stringify(data.blocks)
        let token = document.head.querySelector('meta[name="csrf-token"]')
        let result = await fetch(`/admin/updateBlocks/${activePage.id}`, {
            method: 'POST',
            withCredentials: true,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'text/html',
                'Accept': 'text/html',
                'X-CSRF-TOKEN': token.content
            },
            body: blockString
        })
            .catch(error => {
                console.log(error)
                alert('There has been a problem saving the page.')
            })
        result = await result.json()
        result.blocks = JSON.parse(result.blocks)
        for (let i = 0; i < pages.length; i++) {
            if (pages[i].id === result.id) {
                pages[i] = result
                return alert('Page saved successfully')
            }
        }
    }


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (pages && !activePage) {
            setActivePage(pages[0])
        }
    }, [pages])



    return (
        <>
            {
                !!activePage &&
                <>
                    <Nav editor={editor} pages={pages} setPages={setPages} activePage={activePage} setActivePage={setActivePage} isAdmin={true} />
                    <EditorJs
                        instanceRef={instance => setEditor(instance)}
                        tools={TOOLS}
                        data={({ blocks: activePage.blocks })}
                        // onChange={(e) => handleBlockChange(e)}
                        holder="holder"
                    >
                        <div id="holder" className='relative'>

                        </div>
                    </EditorJs>
                </>
            }
            {/* <div className="flex justify-center mb-8">
                <button onClick={handleSaveClick} className="bg-green-500 px-8 py-4 rounded-lg text-xl text-white opacity-75 hover:opacity-100 border-2 border-green-200 hover:font-bold">Save</button>
            </div> */}
            <MainBtn handleClick={handleSaveClick} color='green' text='Save' />
        </>
    )
}

export default EditorJS