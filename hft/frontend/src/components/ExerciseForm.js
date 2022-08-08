import React, { useState } from "react";

const ExerciseForm = (props) => {

    const initInputs = {
        name: '',
        notes: '',
        sets: '',
        reps: '',
        weight: ''
    }

    const [inputs, setInputs] = useState(initInputs)
    const {addExercise} = props

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addExercise(inputs)
        setInputs(initInputs)
    }

    const {
        name, 
        notes,
        sets,
        reps,
        weight
    } = inputs

    return (
        <form className='exercise--form' onSubmit={handleSubmit}>
            <input 
                type="text"
                name='name'
                value={name}
                onChange={handleChange}
                placeholder='Name'
            />
            <input 
                type="number"
                name='sets'
                value={sets}
                onChange={handleChange}
                placeholder='Sets'
            />
            <input 
                type="number"
                name='reps'
                value={reps}
                onChange={handleChange}
                placeholder='Reps'
            />
            <input 
                type="number"
                name='weight'
                value={weight}
                onChange={handleChange}
                placeholder='Weight'
            />
            <input 
                type="text"
                name='notes'
                value={notes}
                onChange={handleChange}
                placeholder='Notes'
            />
            <button>Add Exercise</button>
        </form>
    )
}

export default ExerciseForm