const todoForm = document.todoform

// GET
axios.get("https://api.vschool.io/bradenthunt/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++){
            const checkBox = document.createElement('input')
            checkBox.setAttribute('type', 'checkbox')
            checkBox.setAttribute('id', 'checkbox')
            document.getElementById('todo-list').appendChild(checkBox)
            
            const h4 = document.createElement('h4')
            h4.textContent = response.data[i].title
            document.getElementById('todo-list').appendChild(h4)

            const editButton = document.createElement('button')
            editButton.textContent = 'Edit'
            document.getElementById('todo-list').appendChild(editButton)

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'X'
            document.getElementById('todo-list').appendChild(deleteButton)
        }
    })
    .catch(error => console.log(error))


// POST
todoForm.addEventListener("submit", function(e) {
    e.preventDefault()

    clearTodoList()

    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    axios.post("https://api.vschool.io/bradenthunt/todo", newTodo)
        .then(response => console.log(response))
        .catch(error => console.log(error))

    // todoForm.title.value = ""
    // todoForm.price.value = ""
    // todoForm.description.value = ""
    // todoForm.imgUrl.value = ""
})

function clearTodoList() {
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}


// PUT
const markCompleted = document.getElementById('checkbox')

markCompleted.addEventListener("change", function(e) {
    if (e.checkBox.checked) {
        axios.put("https://api.vschool.io/bradenthunt/todo/{id}", {completed: true})
            .then(response => console.log(response))
            .catch(error => console.log(error))
        
        h4.innerHTML = `<h4><s>${h4}</s></h4>`
    }
})


// DELETE
// const deleteButton = document.getElementById('delete-button')

deleteButton.addEventListener("click", function(newTodo) {
    e.preventDefault()

    axios.delete("https://api.vschool.io/bradenthunt/todo/" + newTodo._id)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})

// PUT 2
editButton.addEventListener("click", function(e) {
    e.preventDefault()

    const edit = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    axios.put("https://api.vschool.io/bradenthunt/todo/{id}", edit)
        .then(response => console.log(response))
        .catch(error => console.log(error))
})