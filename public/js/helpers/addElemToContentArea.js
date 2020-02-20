function addElemToContentArea(typeOfElem) {
    //Get content area
    const contentArea = document.getElementById('admin-content-area')
    //Get submit all btn so that elements can be added at end
    const submitAllBtn = document.getElementById('submitAllBtn')
    //Get number of elements in content area for unique id
    const numberOfElems = contentArea.children.length
    const id = `content-${numberOfElems}`
    //Create form
    const form = document.createElement('form')
    form.id = id

    //HEAD
    form.setAttribute('method', 'POST')
    form.setAttribute('action', typeOfElem === 'Text' ? `{{action('TextController@store')}}` : `{{action('QuoteController@store')}}`)
    form.setAttribute('enctype', "multipart/form-data")
    form.setAttribute('class', "form-section")


    //INPUT
    //csrf
    const csrf = document.createElement('input')
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    csrf.setAttribute('type', 'hidden')
    csrf.setAttribute('name', '_token')
    csrf.setAttribute('value', token)
    //Page of site
    const type = document.createElement('input')
    type.setAttribute('type', 'hidden')
    type.setAttribute('value', '5')
    //Blog article id (parent)
    const blogArticleId = document.createElement('input')
    blogArticleId.setAttribute('type', 'hidden')
    blogArticleId.setAttribute('value', '$order["id"]')
    //Append to form
    form.appendChild(csrf)
    form.appendChild(blogArticleId)
    form.appendChild(type)

    //TEXT AREA
    //Label
    const label = document.createElement('label')
    label.setAttribute('class', 'form-label')
    label.setAttribute('for', 'text-content')
    label.textContent = `${typeOfElem} Content`
    //Text Area
    const textArea = document.createElement('textarea')
    textArea.setAttribute('class', `blog-text-area blog-text-area--${typeOfElem}`)
    textArea.setAttribute('name', 'content')
    textArea.setAttribute('placeholder', 'Enter text here')
    //Append to Form
    form.appendChild(label)
    form.appendChild(textArea)

    //BTNS
    //Container
    const btnContainer = document.createElement('div')
    btnContainer.setAttribute('class', 'blog-article-btn-container')
    //Submit
    const submitBtn = document.createElement('button')
    submitBtn.setAttribute('class', 'blog-article-btn blog-article-btn--submit')
    submitBtn.textContent = 'Submit Changes'
    submitBtn.setAttribute('type', 'submit')
    // Delete
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'blog-article-btn blog-article-btn--delete')
    deleteBtn.textContent = 'Delete'
    deleteBtn.setAttribute('type', 'button')
    deleteBtn.setAttribute('onClick', `handleDeleteOfNewItem('${id}')`)
    //Append to btn container and then to form
    btnContainer.appendChild(submitBtn)
    btnContainer.appendChild(deleteBtn)
    form.appendChild(btnContainer)

    //BR
    const br = document.createElement('br')
    form.appendChild(br.cloneNode(true))
    form.appendChild(br.cloneNode(true))

    //RETURN
    contentArea.insertBefore(form, submitAllBtn)
}