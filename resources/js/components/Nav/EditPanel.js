import React from 'react'
import { MainBtn } from '../Misc'

const EditPanel = props => {
    const { page, setPageEdit, pages, setPages } = { ...props }

    const handleDeleteClick = () => {
        const confirm = window.confirm('Are you sure you want to delete this page?')

        if (confirm) {
            let token = document.head.querySelector('meta[name="csrf-token"]')
            fetch(`/admin/destroy/${page.id}`, {
                method: 'POST',
                withCredentials: true,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN': token.content
                }
            })
                .then(() => setPages(pages.filter(item => item.id !== page.id)))
                .then(() => alert('Page deleted successfully'))
                .catch(error => console.log(error))
        }
    }

    return (
        <div className="absolute left-0 -mb-16 bg-white pt-12  px-12 z-50 rounded-lg">
            <span
                className="fas fa-caret-up absolute top-0 left-0 text-4xl m-2 opacity-50 hover:opacity-100 cursor-pointer"
                onClick={() => setPageEdit(false)}
            />
            <div className="flex items-center justify-between pb-2">
                <span className="mr-8">Name: </span>
                <input type="text" placeholder="page" value={page.name} className="text-right bg-gray-200 p-2" />
            </div>
            <div className="flex items-center justify-between">
                <span className="mr-8">Slug: </span>
                <input type="text" placeholder="slug" value={page.slug} className="text-right bg-gray-200 p-2" />
            </div>
            <div className="mt-4 flex justify-between">
                <MainBtn handleClick={handleDeleteClick} color='red' text='Delete' />
                <MainBtn color='green' text='Save' />
            </div>
        </div>
    )
}

export default EditPanel