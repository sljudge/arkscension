import React from 'react'

const AddNavElementBtn = props => {
    const { pages, setPages } = { ...props }

    const createPage = () => {
        let token = document.head.querySelector('meta[name="csrf-token"]')
        fetch('/admin/create', {
            method: 'POST',
            withCredentials: true,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': token.content
            },
            body: JSON.stringify({
                name: 'new1',
                slug: 'new1'
            })
        })
            .then(response => response.json())
            .then(response => {
                response.blocks = []
                return response
            })
            .then(response => setPages([...pages, response]))
            .then(() => alert('Page created successfully'))
            .catch(error => console.log(error))

    }

    return (
        <div onClick={createPage} className='flex items-center justify-center '>
            <span className="fas fa-plus-square h-12 w-12 rounded-full hover:bg-white text-green-400 text-2xl opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center transition-all duration-500"></span>
        </div>
    )
}

export default AddNavElementBtn