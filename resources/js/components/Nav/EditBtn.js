import React from 'react'

const AddNavElementBtn = props => {
    const { editing, setEditing, setPageEdit } = { ...props }

    const handleClick = () => {
        if (editing) {
            setPageEdit(false)
        }
        setEditing(!editing)
    }

    return (
        <div className='flex items-center justify-center absolute right-0 bottom-0 top-0 mr-8' onClick={handleClick}>
            <span className={`h-12 w-12 rounded-full hover:bg-white text-3xl hover:opacity-100 cursor-pointer flex items-center justify-center transition-all duration-500 ${editing ? 'far fa-times-circle opacity-75 text-orange-500' : 'fas fa-cog opacity-50 text-blue-400'}`}></span>
        </div>
    )
}

export default AddNavElementBtn