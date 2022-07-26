import React, { useState } from "react";

export default function IssueForm(props) {

    // Match to Issue model
    const initInputs = {
        title: '',
        description: ''
    }

    const [inputs, setInputs] = useState(initInputs)
    const {addIssue} = props

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }

    // Match to issue model
    const {title, description} = inputs

    return (
        <form className='profile--issue--form' onSubmit={handleSubmit}>
            <input 
                type="text"
                name='title'
                value={title}
                onChange={handleChange}
                placeholder='Title'
            />
            <input 
                type="text"
                name='description'
                value={description}
                onChange={handleChange}
                placeholder='Description'
            />
            <button>Add Issue</button>
        </form>
    )
}