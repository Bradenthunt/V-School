import React from "react";
import Exercise from "./Exercise";

const ExerciseList = (props) => {

    const {exercises} = props

    const list = exercises.map(exercise => <Exercise key={exercise._id} {...exercise}/>)

    return (
        <div>
            {list}
        </div>
    )
}

export default ExerciseList