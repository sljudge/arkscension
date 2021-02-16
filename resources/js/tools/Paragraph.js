import { handleText, saveText } from '../helpers'

export default class Paragraph {
    static get toolbox() {
        return {
            title: 'Text',
            icon: '<span class="my-4">P</span>'
        };
    }

    static get enableLineBreaks() {
        return true;
    }

    constructor({ data, config, api }) {
        this.data = {
            text: data.text || []
        }
        this.api = api
        this.settings = []
    }

    createText(parent, data) {
        const paragraph = document.createElement('div')
        handleText(paragraph, data, ['paragraph', 'my-4', 'leading-relaxed'])
        parent.appendChild(paragraph)
    }

    render() {
        this.wrapper = document.createElement('div')
        this.wrapper.className += 'max-w-screen-xl mx-auto'

        if (this.data.text.length > 0) {
            this.data.text.map(paragraph => this.createText(this.wrapper, paragraph))
        } else {
            this.createText(this.wrapper, '')
        }

        return this.wrapper
    }



    save(blockContent) {
        const paragraphs = blockContent.querySelectorAll('.paragraph')
        const text = []
        paragraphs.forEach(p => text.push(saveText(p)))

        return {
            ...this.data,
            text: text
        }
    }
}



