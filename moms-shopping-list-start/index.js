document.getElementById('title').required = true;

document.addItem.addEventListener("submit", function(e){
    e.preventDefault()

    var newItem = document.addItem.title.value
    addItem.title.value = ""

    var li = document.createElement('li')
    li.setAttribute('id', newItem)
    var div = document.createElement('div')
    document.getElementById('list').append(li)
    li.appendChild(div)
    div.innerHTML = '<div>' + newItem + '</div>'
    
    var editButton = document.createElement('button')
    editButton.textContent = "edit"
    div.appendChild(editButton)
    editButton.style.margin = "2px"
    editButton.setAttribute('id', 'edit')

    var deleteButton = document.createElement('button')
    deleteButton.textContent = "X"
    div.append(deleteButton)
    deleteButton.style.margin = "2px"
    deleteButton.setAttribute('id', 'delete')
    
    deleteButton.addEventListener("click", deleteItem)

        function deleteItem(){
            var parent = document.getElementById('list')
            parent.removeChild(li)
        }

})