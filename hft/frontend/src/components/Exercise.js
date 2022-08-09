import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { WorkoutContext } from "../context/WorkoutProvider";

const Exercise = (props) => {

    const {deleteExercise} = useContext(WorkoutContext)

    const location = useLocation()

    const {
        name,
        notes,
        sets,
        reps,
        weight,
        _id
    } = props

    const isAllowedOnPage = location.pathname.includes('profile')

    return (
        <div className="exercise">
            <h1>{name}</h1>
            <h3>{sets} sets</h3>
            <h3>{reps} reps</h3>
            <h3>{weight}lbs</h3>
            <h3>{notes}</h3>
            {isAllowedOnPage && <button onClick={() => deleteExercise(_id)}>X</button>}
        </div>
    )
}

export default Exercise