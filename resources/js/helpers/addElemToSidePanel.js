function addElemToSidePanel(typeOfElem, contentId) {
    //Get side panel
    const sidePanel = document.getElementById('admin-side-panel')
    //Get add text btn so that elements can be added at before it
    const addTextBtn = document.getElementById('add-text-btn')
    //Create elem
    const elem = document.createElement('div')
    elem.setAttribute('class', 'admin-side-panel--item')
    elem.textContent = typeOfElem
    //Get number of elements in content area for unique id
    const id = `side-panel-${contentId.slice(-2)}`
    elem.id = id
    //Apend to panel
    sidePanel.insertBefore(elem, addTextBtn)
}