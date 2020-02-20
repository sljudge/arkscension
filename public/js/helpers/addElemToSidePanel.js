function addElemToSidePanel(typeOfElem) {
    //Get side panel
    const sidePanel = document.getElementById('admin-side-panel')
    //Get add text btn so that elements can be added at before it
    const addTextBtn = document.getElementById('add-text-btn')
    //Create elem
    const elem = document.createElement('div')
    elem.setAttribute('class', 'admin-side-panel--item')
    elem.textContent = typeOfElem
    //Get number of elements in content area for unique id
    const numberOfElems = sidePanel.children.length
    const id = `side-panel-${numberOfElems}`
    elem.id = id
    //Apend to panel
    sidePanel.insertBefore(elem, addTextBtn)
}