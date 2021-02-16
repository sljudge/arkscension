import { handleText, saveText } from '../helpers'

export default class Table {
    static get toolbox() {
        return {
            title: 'Table',
            icon: '<div class="border border-black">--¦--</div>'
        };
    }

    constructor({ data, config, api }) {
        this.data = {
            title: data.title || '',
            head: data.head || [],
            body: data.body || [],
            cols: data.head ? data.head.length : 2
        }
        this.api = api
        this.settings = []
    }

    createTitle() {
        const title = document.createElement('div')
        handleText(title, this.data.title, ['text-2xl', 'font-bold', 'mb-4'])
        this.wrapper.appendChild(title)
    }

    createTableHead() {
        const head = document.createElement('tr')

        if (this.data.head.length > 0) {
            this.data.head.map((item, i) => this.createTH(head, item, i))
        } else {
            for (let i = 0; i < this.data.cols; i++) { this.createTH(head) }
        }

        this.table.appendChild(head)
    }

    createTH(container, data = '', i) {
        const content = document.createElement('th')
        content.className += 'relative p-4 bg-gray-300'
        content.setAttribute('columnIndex', i)
        container.appendChild(content)

        const text = document.createElement('span')
        handleText(text, data, ['p-4'])
        content.appendChild(text)

        this.createDeleteBtn(content, () => this.deleteColumn(i), ['absolute', 'right-0', 'mr-4'])
    }

    deleteColumn(index) {
        const content = [...this.table.querySelectorAll('th'), ...this.table.querySelectorAll('td')]
        content.forEach(elem => {
            if (elem.getAttribute('columnIndex') == index) {
                const row = elem.closest('tr')
                row.removeChild(elem)
            }
        })
        this.data.cols -= 1
    }

    createTableBody() {
        if (this.data.body.length > 0) {
            this.data.body.map((row) => {
                const tr = this.createRow()
                row.map((item, i) => this.createTD(tr, item, i))
                this.createDeleteBtn(tr, () => this.table.removeChild(tr), ['absolute', 'right-0', 'p-4'])
                this.table.appendChild(tr)
            })
        } else {
            const tr = this.createRow()
            for (let i = 0; i < this.data.cols; i++) { this.createTD(tr, '', i) }
            this.createDeleteBtn(tr, () => this.table.removeChild(tr), ['absolute', 'right-0', 'p-4'])
            this.table.appendChild(tr)
        }
    }

    createTD(container, data = '', i, newColumn = false) {
        const content = document.createElement('td')
        content.setAttribute('columnIndex', i)
        handleText(content, data, ['p-4', 'text-center', 'm-1'])
        newColumn ? container.insertBefore(content, container.lastChild) : container.appendChild(content)
    }

    createRow() {
        const tr = document.createElement('tr')
        tr.className += 'relative'
        return tr
    }

    createAddColumnBtn() {
        const btn = document.createElement('button')
        this.table.appendChild(btn)
        btn.innerHTML = '<span class="fas fa-arrow-right h-8 w-8 rounded-full bg-gray-700 text-green-400 text-lg opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center absolute top-0 right-0 -mt-10"></span>'
        btn.addEventListener('click', () => this.addNewColumn())
    }

    addNewColumn() {
        const rows = this.table.querySelectorAll('tr')
        rows.forEach((row, i) => {
            i === 0 ? this.createTH(row) : this.createTD(row, '', i, true)
        })
        this.data.cols += 1
    }

    createAddRowBtn() {
        const btn = document.createElement('button')
        this.table.appendChild(btn)
        btn.innerHTML = '<span class="fas fa-arrow-down h-8 w-8 rounded-full bg-gray-700 text-green-400 text-lg opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center absolute bottom-0 left-0 -mb-10"></span>'
        btn.addEventListener('click', () => this.addNewRow())
    }

    addNewRow() {
        const row = this.createRow()
        for (let i = 0; i < this.data.cols; i++) { this.createTD(row, '', i) }
        this.createDeleteBtn(row, () => this.table.removeChild(row), ['absolute', 'right-0', 'p-4'])
        this.table.appendChild(row)
    }

    createDeleteBtn(container, func, classes = []) {
        const btnContainer = document.createElement('span')
        classes.forEach(item => btnContainer.classList.add(item))
        container.appendChild(btnContainer)

        const btn = document.createElement('button')
        btn.className += 'fas fa-trash text-red-500 opacity-50 hover:opacity-100 text-lg my-auto'
        btn.addEventListener('click', func)
        btnContainer.appendChild(btn)
    }

    render() {
        this.wrapper = document.createElement('div')
        this.wrapper.className += 'max-w-screen-xl mx-auto my-1 py-12'

        this.createTitle()

        this.table = document.createElement('table')
        this.table.className += 'w-full p-4 relative'
        this.wrapper.appendChild(this.table)

        this.createTableHead()

        this.createTableBody()

        this.createAddColumnBtn()

        this.createAddRowBtn()

        return this.wrapper
    }



    save(blockContent) {
        const title = blockContent.querySelector('div')
        const head = this.table.querySelectorAll('th')
        const body = this.table.querySelectorAll('td')

        const headContent = []
        head.forEach(th => headContent.push(saveText(th)))

        const bodyContent = []
        let row = []
        body.forEach((td, i) => {

            row.push(saveText(td))

            if ((i + 1) % this.data.cols === 0) {
                bodyContent.push(row)
                row = []
            }

        })

        return {
            title: saveText(title),
            head: headContent,
            body: bodyContent
        }
    }
}



