import React, { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutProvider";
import Exercise from "./Exercise";

const ExerciseList = (props) => {

    const {exercises} = props
    const {deleteExercise} = useContext(WorkoutContext)


    const list = exercises.map(exercise => {
        return (

            <Exercise key={exercise._id} {...exercise}/>

        )
    })

    return (
        <div>
            {list}
        </div>
    )
}

export default ExerciseList