import { handleImages, saveImage } from '../helpers'

export default class Images {
    static get toolbox() {
        return {
            title: 'Images',
            icon: '<i class="fas fa-images p-1 mx-2"></i>'
        };
    }

    constructor({ data, config, api }) {
        this.data = {
            imgUrls: data.imgUrls || [],
            size: `grid-cols-${data.size || 1}`
        }
        this.api = api
        this.settings = [
            {
                name: 'grid-cols-1',
                icon: `<span>x1</span>`
            },
            {
                name: 'grid-cols-2',
                icon: `<span>x2</span>`
            },
            {
                name: 'grid-cols-3',
                icon: `<span>x3</span>`
            },
            {
                name: 'grid-cols-4',
                icon: `<span>x4</span>`
            },
        ]
    }

    createElement(parent, imgUrl = '') {
        const element = document.createElement('div')
        parent.appendChild(element)
        element.className += 'element w-full h-84 my-4 max-w-screen-md mx-auto'
        handleImages(element, imgUrl, ['relative', 'bg-center', 'bg-contain', 'bg-no-repeat', 'bg-gray-400'])
    }

    createAddElementBtn(parent) {
        const container = document.createElement('div')
        parent.appendChild(container)
        container.className += 'flex items-center justify-center absolute right-0 bottom-0 -ml-32 mb-2'

        const btn = document.createElement('button')
        container.appendChild(btn)
        btn.innerHTML = '<span class="fas fa-plus-square h-16 w-16 rounded-full bg-gray-700 text-green-400 text-2xl opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center"></span>'
        btn.addEventListener('click', () => this.createElement(this.wrapper, ''))

        return container
    }

    render() {
        this.wrapper = document.createElement('div')
        this.wrapper.className += `grid ${this.data.size} p-4 pb-16 gap-4 max-w-screen-xl mx-auto relative`

        this.addElementBtn = this.createAddElementBtn(this.wrapper)

        if (this.data.imgUrls.length > 0) {
            this.data.imgUrls.forEach(image => this.createElement(this.wrapper, image))
        } else {
            this.createElement(this.wrapper)
        }

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
        this.data.size = tune
        this._acceptTuneView()
    }

    _acceptTuneView() {
        this.settings.forEach(tune => {
            this.wrapper.classList.toggle(tune.name, this.data.size === tune.name)
        })
    }

    save(blockContent) {
        const images = blockContent.querySelectorAll('.element')
        const urls = []
        images.forEach(image => {
            urls.push(saveImage(image))
        })

        return {
            ...this.data,
            imgUrls: urls
        }
    }
}



