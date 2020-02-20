const addElemToSidePanel = require('./addElemToSidePanel')
const addElemToContentArea = require('./addElemToContentArea')

function addElem(typeOfElem) {
    addElemToContentArea(typeOfElem)
    addElemToSidePanel(typeOfElem)
}