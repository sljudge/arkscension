function addElemToContentArea(typeOfElem) {
    //Get content area
    const contentArea = document.getElementById('admin-content-area')
    //Get submit all btn so that elements can be added at end
    const submitAllBtn = document.getElementById('submitAllBtn')
    //Get number of elements in content area for unique id
    const numberOfElems = document.getElementsByClassName('form-section').length - 1
    const id = `content-${numberOfElems}`
    //Create form
    const form = document.createElement('form')
    form.id = id

    //HEAD
    form.setAttribute('method', 'POST')
    form.setAttribute('enctype', "multipart/form-data")
    form.setAttribute('class', "form-section")
    form.setAttribute('action', typeOfElem === 'Text' ? `/admin/texts` : `/admin/quotes`)


    //INPUT
    //Hidden Fields
    //csrf
    const csrf = document.createElement('input')
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    csrf.setAttribute('type', 'hidden')
    csrf.setAttribute('name', '_token')
    csrf.setAttribute('value', token)
    //Page of site
    const type = document.createElement('input')
    type.setAttribute('type', 'hidden')
    type.setAttribute('name', 'type')
    type.setAttribute('value', '5')
    //Blog article id (parent)
    const blogArticleId = document.createElement('input')
    blogArticleId.setAttribute('type', 'hidden')
    blogArticleId.setAttribute('name', 'blog_article_id')
    blogArticleId.setAttribute('value', document.getElementById('blog-article-id').value)
    //order
    const order = document.createElement('input')
    order.setAttribute('type', 'hidden')
    order.setAttribute('name', 'order')
    order.setAttribute('value', numberOfElems)
    //Append to form
    form.appendChild(csrf)
    form.appendChild(blogArticleId)
    form.appendChild(type)
    form.appendChild(order)



    //TEXT AREA
    //Label
    const textAreaLabel = document.createElement('label')
    textAreaLabel.textContent = `${typeOfElem} Content`
    textAreaLabel.setAttribute('class', 'form-label')
    textAreaLabel.setAttribute('for', 'content')
    //Text Area
    const textArea = document.createElement('textarea')
    textArea.setAttribute('class', `blog-text-area blog-text-area--${typeOfElem}`)
    textArea.setAttribute('name', 'content')
    textArea.setAttribute('placeholder', 'Enter text here')
    //Append to Form
    form.appendChild(textAreaLabel)
    //Color for quote
    if (typeOfElem === 'Quote') {
        //label
        const colorLabel = document.createElement('label')
        colorLabel.setAttribute('for', 'color')
        //select
        const colorSelect = document.createElement('select')
        colorSelect.setAttribute('name', 'color')
        //options
        const blueOption = document.createElement('option')
        blueOption.setAttribute('value', 1)
        blueOption.innerText = 'Blue'
        const greenOption = document.createElement('option')
        greenOption.setAttribute('value', 2)
        greenOption.innerText = 'Green'
        colorSelect.appendChild(blueOption)
        colorSelect.appendChild(greenOption)
        //append
        form.appendChild(colorLabel)
        form.appendChild(colorSelect)
    }
    form.appendChild(textArea)

    //BTNS
    //Container
    const btnContainer = document.createElement('div')
    btnContainer.setAttribute('class', 'blog-article-btn-container')
    //Submit
    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Save Section'
    submitBtn.setAttribute('class', 'blog-article-btn blog-article-btn--save')
    submitBtn.setAttribute('type', 'submit')
    // Delete
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.setAttribute('class', 'blog-article-btn blog-article-btn--delete')
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
    return id
}