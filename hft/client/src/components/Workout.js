import React, { useState } from "react";
import ExerciseList from "./ExerciseList";

const Workout = (props) => {

    const [comment, setComment] = useState('')

    const {
        name,
        description,
        exercises,
        _id
    } = props

    return (
        <div>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <ExerciseList {...exercises}/>
            <form >
                <input
                    type='text' 
                    name='text'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='Comment'
                />
                <button>Add Comment</button>
            </form>
        </div>
    )
}

export default Workout