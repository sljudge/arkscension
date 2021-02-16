import { handleText, saveText } from '../helpers'

export default class Header {
    static get toolbox() {
        return {
            title: 'Header',
            icon: '<span>H</span>'
        };
    }

    constructor({ data, config, api }) {
        this.data = {
            text: data.text || '',
            size: data.size || 1
        }
        this.api = api
        this.settings = [
            {
                name: 1,
                icon: `<span>H1</span>`
            },
            {
                name: 2,
                icon: `<span>H2</span>`
            },
            {
                name: 3,
                icon: `<span>H3</span>`
            },
            {
                name: 4,
                icon: `<span>H4</span>`
            },
        ]
    }

    createHeader(data) {
        switch (this.data.size) {
            case 1:
                this.header = document.createElement('h1')
                break;
            case 2:
                this.header = document.createElement('h2')
                break;
            case 3:
                this.header = document.createElement('h3')
                break;
            case 4:
                this.header = document.createElement('h4')
                break;
            default:
                break;
        }
        handleText(this.header, this.data.text)
        this.wrapper.appendChild(this.header)
    }

    render() {
        this.wrapper = document.createElement('div')
        this.wrapper.className += 'max-w-screen-xl mx-auto my-4'

        this.createHeader(this.data.text)

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
        const data = this.header.innerText
        this.wrapper.removeChild(this.header)
        this.createHeader(data)
    }

    save(blockContent) {
        return {
            ...this.data,
            text: saveText(this.header)
        }
    }
}



