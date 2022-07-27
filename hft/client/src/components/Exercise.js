import React, { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutProvider";

const Exercise = (props) => {

    const {deleteExercise} = useContext(WorkoutContext)

    const {
        name,
        notes,
        sets,
        reps,
        weight,
        _id
    } = props

    return (
        <div className="exercise">
            <h1>{name}</h1>
            <h3>{sets}</h3>
            <h3>{reps}</h3>
            <h3>{weight}</h3>
            <h3>{notes}</h3>
            <button onClick={() => deleteExercise(_id)}>X</button>
        </div>
    )
}

export default Exercise