function highlightElement(id, success) {
    const element = document.getElementById(id)
    console.log(element)
    if (success) {
        element.style.border = '5px solid rgba(34,139,34, 0.7)'
    } else {
        element.style.border = '5px solid rgba(207, 0, 15, 0.7)'
    }
    setTimeout(() => {
        element.style = { border: 'none' }
    }, 3000)
}