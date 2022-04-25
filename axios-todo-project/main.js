const todoForm = document.todoform

// GET
axios.get("https://api.vschool.io/bradenthunt/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++){
            const checkBox = document.createElement('input')
            checkBox.setAttribute('type', 'checkbox')
                if (response.data[i].completed) {
                    checkBox.setAttribute('checked', true)
                }
            checkBox.setAttribute('id', response.data[i]._id)
            checkBox.addEventListener("change", function(e) {
                if (e.target.checked) {
                    axios.put("https://api.vschool.io/bradenthunt/todo/" + response.data[i]._id, {completed: true})
                        .then(response => console.log(response.data))
                        .catch(error => console.log(error))
                    
                    h4.style.textDecoration = 'line-through'
                } else {
                    axios.put("https://api.vschool.io/bradenthunt/todo/" + response.data[i]._id, {completed: false})
                        .then(response => console.log(response.data))
                        .catch(error => console.log(error))
                    
                    h4.style.textDecoration = ''
                }
            })
            document.getElementById('todo-list').appendChild(checkBox)
            
            const h4 = document.createElement('h4')
            h4.textContent = response.data[i].title
            if (response.data[i].completed) {
                h4.style.textDecoration = 'line-through'
            }
            document.getElementById('todo-list').appendChild(h4)

            // const editButton = document.createElement('button')
            // editButton.textContent = 'Edit'
            // editButton.addEventListener("click", function(e) {
            //     e.preventDefault()
            
            //     editButton.textContent = 'Save'

            //     const edit = {
            //         title: todoForm.title.value,
            //         price: todoForm.price.value,
            //         description: todoForm.description.value,
            //         imgUrl: todoForm.imgUrl.value
            //     }
            
            //     axios.put("https://api.vschool.io/bradenthunt/todo/" + response.data[i]._id, edit)
            //         .then(response => console.log(response.data))
            //         .catch(error => console.log(error))

            // })
            // editButton.addEventListener("click", function(e) {
            //     e.preventDefault()
            
            //     editButton.textContent = 'Edit'

            //     const edit = {
            //         title: todoForm.title.value,
            //         price: todoForm.price.value,
            //         description: todoForm.description.value,
            //         imgUrl: todoForm.imgUrl.value
            //     }
            
            //     axios.put("https://api.vschool.io/bradenthunt/todo/" + response.data[i]._id, edit)
            //         .then(response => console.log(response.data))
            //         .catch(error => console.log(error))

            // })
            // document.getElementById('todo-list').appendChild(editButton)

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'X'
            deleteButton.setAttribute('id', response.data[i]._id)
            deleteButton.addEventListener("click", function(e) {
                e.preventDefault()
            
                axios.delete("https://api.vschool.io/bradenthunt/todo/" + response.data[i]._id)
                    .then(response => {
                        console.log(response.data)

                        checkBox.remove()
                        h4.remove()
                        // editButton.remove()
                        deleteButton.remove()
                        })
                    .catch(error => console.log(error))
            })
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
})

function clearTodoList() {
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}