import React, { useContext } from "react";
import { WorkoutContext } from "../../context/WorkoutProvider";

const Workout = () => {

    const {addWorkout} = useContext(WorkoutContext)

    return (
        <div>
            <h1>Workout</h1>
            <h3>Add Exercise</h3>
            <ExerciseForm addWorkout={addWorkout}/>
            <ExerciseList />
        </div>
    )
}

export default Workout