export default function handleText(container, data, classes) {

    container.contentEditable = true
    container.className += 'min-w-24'
    container.innerText = data || ''

    if (!data) {
        container.classList.add('bg-placeholder')
    }

    if (classes) {
        classes.forEach(className => container.classList.add(className))
    }

    container.oninput = () => {
        if (container.innerHTML.length !== 0) {
            container.classList.remove('bg-placeholder')
        } else {
            container.classList.add('bg-placeholder')
        }
    }

}
