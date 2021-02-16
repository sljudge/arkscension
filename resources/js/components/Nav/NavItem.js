import React from 'react'
import EditPanel from './EditPanel'

const NavItem = props => {
    const { selected, page, handleClick, editing, pageEdit, setPageEdit, pages, setPages } = { ...props }

    return (
        <div className="relative">
            <div className="h-full flex items-center justify-center mr-12">
                <div className={`text-gray-300 hover:text-white hover:font-semibold cursor-pointer tracking-wider ${selected && 'text-white border-b-2 border-dotted border-gray-200 font-semibold'}`}>
                    <span onClick={() => handleClick(page.id)}>
                        {page.name}
                    </span>
                </div>
                {
                    editing &&
                    <span
                        className="fas fa-cog ml-4 text-xl text-blue-500 opacity-25 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        onClick={() => setPageEdit(page.id)}
                    />
                }
            </div>
            {
                editing && pageEdit == page.id &&
                <EditPanel page={page} setPageEdit={setPageEdit} pages={pages} setPages={setPages} />
            }
        </div>
    )
}

export default NavItem