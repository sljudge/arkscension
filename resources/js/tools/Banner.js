import { handleImages, handleText, saveImage, saveText } from '../helpers'

export default class Banner {
    static get toolbox() {
        return {
            title: 'Banner',
            icon: '<i class="fas fa-image p-1 mx-2 border border-gray-500 bg-white"></i>'
        };
    }

    constructor({ data, config, api }) {
        this.data = {
            header: data.header || '',
            subHeader: data.subHeader || '',
            imgUrl: data.imgUrl || '',
            white: data.white || false
        }
        this.api = api
        this.settings = [
            {
                name: 'white',
                icon: `<span class="bg-gray-700 text-white text-center w-full">T</span>`
            },
        ]
    }

    createText(parent) {
        const container = document.createElement('div')
        parent.appendChild(container)

        this.header = document.createElement('h1')
        handleText(this.header, this.data.header, ['mb-2', 'p-4', 'header'])
        container.appendChild(this.header)

        this.subHeader = document.createElement('div')
        handleText(this.subHeader, this.data.subHeader, ['p-2', 'sub-header'])
        container.appendChild(this.subHeader)

    }

    render() {
        this.wrapper = document.createElement('div')
        this.wrapper.className += 'min-w-full min-h-132 h-132 bg-gray-400 flex items-center justify-center absolute'

        handleImages(this.wrapper, this.data.imgUrl, ['relative', 'bg-center', 'bg-cover', 'bg-no-repeat', 'bg-gray-400'])

        this.createText(this.wrapper)

        return this.wrapper
    }

    renderSettings() {
        const wrapper = document.createElement('div');

        this.settings.forEach(tune => {

            let button = document.createElement('div');

            button.classList.add(this.api.styles.settingsButton);
            button.classList.toggle(this.api.styles.settingsButtonActive, this.data[tune.name]);
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
        this.data[tune] = !this.data[tune];
        this._acceptTuneView();
    }

    _acceptTuneView() {
        this.settings.forEach(tune => {
            if (tune.name === 'white') {
                this.header.classList.toggle('text-white')
                this.header.classList.toggle('text-black')
                this.subHeader.classList.toggle('text-white')
                this.subHeader.classList.toggle('text-black')
            }
        });
    }

    save(blockContent) {
        const header = blockContent.querySelector('.header')
        const subHeader = blockContent.querySelector('.subHeader')

        return {
            header: saveText(header),
            subHeader: saveText(subHeader),
            imgUrl: saveImage(this.wrapper),
            white: this.data.white
        }
    }
}



