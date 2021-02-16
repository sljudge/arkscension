import React, { useState, useEffect } from 'react'
import AddNavElementBtn from './AddNavElementBtn'
import EditBtn from './EditBtn'
import NavItem from './NavItem'


const Nav = props => {
    const { editor, pages, setPages, activePage, setActivePage, isAdmin } = { ...props }
    const [editing, setEditing] = useState(false)
    const [pageEdit, setPageEdit] = useState(false)

    const handleItemClick = (id) => {
        if (pageEdit) {
            setPageEdit(false)
        }
        const activePage = pages.find(page => page.id === id)
        setActivePage(activePage)
        console.log(activePage)
        if (!!editor) {
            editor.render({ blocks: activePage.blocks })
        }
    }

    return (
        <>
            <nav className="relative flex justify-center bg-elemDark shadow-lg py-2 h-16">
                {pages.map((page, i) => (
                    <NavItem
                        key={i}
                        selected={activePage.id === page.id}
                        page={page}
                        handleClick={handleItemClick}
                        editing={editing}
                        pageEdit={pageEdit}
                        setPageEdit={setPageEdit}
                        pages={pages}
                        setPages={setPages}
                    />
                ))}
                {
                    isAdmin &&
                    <>
                        {
                            editing && <AddNavElementBtn pages={pages} setPages={setPages} />
                        }
                        <EditBtn editing={editing} setEditing={setEditing} setPageEdit={setPageEdit} />
                    </>
                }
            </nav>
        </>
    )
}

export default Nav