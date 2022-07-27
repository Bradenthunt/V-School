import React from "react";
import Exercise from "./Exercise";

const ExerciseList = (props) => {

    const {exercises} = props

    return (
        <div>
            {exercises.map(exercise => <Exercise {...exercise} key={exercise._id}/>)}
        </div>
    )
}

export default ExerciseList