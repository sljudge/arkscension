import { handleText, saveText } from '../helpers'

export default class List {
    static get toolbox() {
        return {
            title: 'List',
            icon: '<i class="fas fa-list"></i>'
        };
    }

    static get enableLineBreaks() {
        return true;
    }

    constructor({ data, config, api }) {
        this.data = {
            items: data.items || ['...'],
            numbered: data.numbered || false
        }
        this.api = api
        this.settings = [
            {
                name: 'numbered',
                icon: '<span class="flex justify-center items-center"><span class="fas fa-list-ol text-lg"></span></span>'
            }
        ]
    }

    createAddBtn() {
        this.addBtn = document.createElement('div')
        this.addBtn.className += 'mb-4'
        this.wrapper.appendChild(this.addBtn)

        const btn = document.createElement('span')
        this.addBtn.appendChild(btn)
        btn.className += 'fas fa-plus h-8 w-8 rounded-full bg-gray-700 text-green-400 text-lg opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center mx-auto'
        btn.addEventListener('click', () => this.createItem())
    }

    createDeleteBtn(container) {
        const btnContainer = document.createElement('span')
        container.appendChild(btnContainer)
        btnContainer.className += 'absolute right-0'

        const btn = document.createElement('button')
        btnContainer.appendChild(btn)
        btn.className += 'fas fa-trash text-red-500 opacity-50 hover:opacity-100 text-lg my-auto'
        btn.addEventListener('click', () => {
            this.wrapper.removeChild(container)
        })
    }

    createItem(item = '...') {
        const li = document.createElement('li')
        handleText(li, item, ['my-4', 'relative', this.data.numbered ? 'list-decimal' : 'list-disc'])
        this.createDeleteBtn(li)
        this.wrapper.insertBefore(li, this.addBtn)
    }

    render() {
        this.wrapper = document.createElement(this.data.numbered ? 'ol' : 'ul')
        this.wrapper.className += 'max-w-screen-xl mx-auto pt-8 relative'

        this.data.items.map(item => this.createItem(item))

        this.createAddBtn()

        return this.wrapper
    }

    renderSettings() {
        const wrapper = document.createElement('div');

        this.settings.forEach(tune => {

            let button = document.createElement('div');

            button.classList.add(this.api.styles.settingsButton);
            button.classList.toggle(this.api.styles.settingsButtonActive);
            button.innerHTML = tune.icon;
            wrapper.appendChild(button);

            button.addEventListener('click', () => {
                this._toggleTune(tune.name);
                button.classList.toggle(this.api.styles.settingsButtonActive);
            });
        })
        return wrapper;
    }

    _toggleTune(tune) {
        this.data.numbered = !this.data.numbered
        this._acceptTuneView()
    }

    _acceptTuneView() {
        const data = this.wrapper.querySelectorAll('li')
        data.forEach(item => {
            item.classList.toggle('list-decimal')
            item.classList.toggle('list-disc')
        })
    }

    save(blockContent) {

        const elems = this.wrapper.querySelectorAll('li')
        const items = []
        elems.forEach(item => items.push(saveText(item)))

        return {
            ...this.data,
            items: items
        }
    }
}



