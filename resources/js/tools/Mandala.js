import { handleImages, saveImage, handleText, saveText } from '../helpers'

export default class Mandala {
    static get toolbox() {
        return {
            title: 'Mandala',
            icon: '<i class="fas fa-circle p-1 mx-2 rounded-full border-gray-800"></i>'
        };
    }

    constructor({ data, config, api }) {
        this.data = {
            red: data.red || 72,
            green: data.green || 187,
            blue: data.blue || 120,
            opacity: data.opacity || 40,
            color: data.color || 'custom',
            imgUrl: data.imgUrl || '',
            repeat: data.repeat || true,
            text: data.text || ''
        }
        this.api = api
        this.settings = [
            {
                name: 'blue',
                icon: '<span class="blue-mandala bg-contain bg-no-repeat min-h-8 min-w-8 p-4"></span>'
            },
            {
                name: 'green',
                icon: '<span class="green-mandala bg-contain bg-no-repeat min-h-8 min-w-8 p-4"></span>'
            },
            {
                name: 'brown',
                icon: '<span class="brown-mandala bg-contain bg-no-repeat min-h-8 min-w-8 p-4"></span>'
            },
            {
                name: 'dark',
                icon: '<span class="dark-mandala bg-contain bg-no-repeat min-h-8 min-w-8 p-4"></span>'
            },
            {
                name: 'pink',
                icon: '<span class="pink-mandala bg-contain bg-no-repeat min-h-8 min-w-8 p-4"></span>'
            },
            {
                name: 'guilloche',
                icon: '<span class="guilloche-mandala bg-contain bg-no-repeat min-h-8 min-w-8 p-4"></span>'
            },
            {
                name: 'custom',
                icon: '<span class="bg-gray-700 bg-contain bg-no-repeat min-h-8 min-w-8 p-4 my-1 rounded-full"></span>'
            },
            {
                name: 'repeat',
                icon: '<span class="w-full h-full flex items-center justify-center"><span class="fas fa-infinity min-h-8 min-w-8 p-4 my-1"></span></span>'
            }
        ]
    }

    createMandala() {
        this.mandala = document.createElement('div')
        this.mandala.className += 'min-h-80 max-h-full rounded-full opacity-50 flex items-center justify-center text-center'
        handleImages(this.mandala, this.data.imgUrl, ['relative', 'bg-center', 'bg-contain', 'bg-repeat', 'bg-white'])
        switch (this.data.color) {
            case 'green':
                this.mandala.classList.add('green-mandala'); break;
            case 'blue':
                this.mandala.classList.add('blue-mandala'); break;
            case 'brown':
                this.mandala.classList.add('brown-mandala'); break;
            case 'dark':
                this.mandala.classList.add('dark-mandala'); break;
            case 'pink':
                this.mandala.classList.add('pink-mandala'); break;
            case 'guilloche':
                this.mandala.classList.add('guilloche-mandala'); break;
            case 'custom':
                this.mandala.classList.add('custom-mandala');
                this.mandala.style.backgroundColor = `rgba(${this.data.red}, ${this.data.green}, ${this.data.blue}, ${this.data.opacity / 100})`;
                break;
            default:
                break;
        }
        this.wrapper.appendChild(this.mandala)
    }

    createText() {
        this.textContainer = document.createElement('div')
        handleText(this.textContainer, this.data.text, ['p-12', 'bg-gray-100', 'rounded-lg', 'shadow-2xl', 'max-w-2/3'])
        this.mandala.appendChild(this.textContainer)
    }

    createControls() {
        this.controls = document.createElement('div')
        this.controls.className += `w-full flex justify-evenly p-8 ${this.data.color === 'custom' ? 'visible' : 'hidden'}`
        this.wrapper.appendChild(this.controls)

        this.createSlider('red')
        this.createSlider('green')
        this.createSlider('blue')
        this.createSlider('opacity')
    }

    createSlider(field) {
        const container = document.createElement('div')
        container.className += 'p-4 rounded-md'
        container.style.background = `rgba(${field === 'red' ? this.data.red : '0'}, ${field === 'green' ? this.data.green : '0'}, ${field === 'blue' ? this.data.blue : '0'}, ${this.data.opacity / 100})`
        this.controls.appendChild(container)

        const input = document.createElement('input')
        container.appendChild(input)
        input.type = 'range'
        input.value = field === 'red' ? this.data.red : field === 'green' ? this.data.green : field === 'blue' ? this.data.blue : this.data.opacity
        input.min = 0
        input.max = field !== 'opacity' ? 255 : 100

        input.addEventListener('change', (e) => {
            const parent = e.target.parentElement
            switch (field) {
                case 'red':
                    this.data.red = e.target.value;
                    parent.style.background = `rgba(${this.data.red}, 0, 0, ${this.data.opacity / 100})`
                    break;
                case 'green':
                    this.data.green = e.target.value;
                    parent.style.background = `rgba(0, ${this.data.green}, 0, ${this.data.opacity / 100})`
                    break;
                case 'blue':
                    this.data.blue = e.target.value;
                    parent.style.background = `rgba(0, 0, ${this.data.blue}, ${this.data.opacity / 100})`
                    break;
                case 'opacity':
                    this.data.opacity = e.target.value;
                    parent.style.background = `rgba(0, 0, 0, ${this.data.opacity / 100})`
                    const inputs = this.wrapper.querySelectorAll('input')
                    inputs.forEach(input => {
                        const parent = input.parentElement
                        let arr = parent.style.background.split('')
                        for (let i = arr.length; i > 0; i--) {
                            arr[i] !== ',' ? arr.splice(i) : i = -1
                        }
                        parent.style.background = arr.join('') + ` ${this.data.opacity / 100})`
                    })
                    break;
                default:
                    break;
            }

            this.mandala.style.backgroundColor = `rgba(${this.data.red}, ${this.data.green}, ${this.data.blue}, ${this.data.opacity / 100})`
        })

    }

    render() {
        this.wrapper = document.createElement('div')
        this.wrapper.className += 'max-w-screen-xl min-h-80 max-h-132 mx-auto my-1 py-12 relative'

        this.createMandala()
        this.createText()
        this.createControls()

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
        if (tune !== 'repeat') {
            this.data.color = tune
        } else {
            this.data.repeat = !this.data.repeat
        }
        this._acceptTuneView(tune)
    }

    _acceptTuneView(tune) {

        if (tune === 'repeat') {
            this.mandala.classList.toggle('bg-repeat')
            this.mandala.classList.toggle('bg-no-repeat')
            return;
        }

        const reset = () => {
            this.mandala.style.backgroundImage = ''
            this.mandala.style.background = ''
            this.data.color === 'custom' ? this.controls.classList.remove('hidden') : this.controls.classList.add('hidden')
        }
        switch (this.data.color) {
            case 'blue':
                reset()
                this.mandala.className = this.mandala.className.replace(/green|red|brown|dark|pink|guilloche|custom/gi, 'blue')
                break;
            case 'green':
                reset()
                this.mandala.className = this.mandala.className.replace(/blue|red|brown|dark|pink|guilloche|custom/gi, 'green')
                break;
            case 'brown':
                reset()
                this.mandala.className = this.mandala.className.replace(/blue|red|green|dark|pink|guilloche|custom/gi, 'brown')
                break;
            case 'dark':
                reset()
                this.mandala.className = this.mandala.className.replace(/blue|red|green|brown|pink|guilloche|custom/gi, 'dark')
                break;
            case 'pink':
                reset()
                this.mandala.className = this.mandala.className.replace(/blue|red|green|brown|dark|guilloche|custom/gi, 'pink')
                break;
            case 'guilloche':
                reset()
                this.mandala.className = this.mandala.className.replace(/blue|red|green|brown|dark|pink|custom/gi, 'guilloche')
                break;
            case 'custom':
                reset()
                this.mandala.className = this.mandala.className.replace(/blue|red|green|brown|dark|pink|guilloche/gi, 'custom')
                this.mandala.style.background = `rgba(${this.data.red}, ${this.data.green}, ${this.data.blue}, ${this.data.opacity})`
                break;
            default:
                break;
        }
    }

    save(blockContent) {
        return {
            ...this.data,
            text: saveText(this.textContainer)
        }
    }
}



