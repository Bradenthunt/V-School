import React from "react";
import Workout from "./Workout";

const WorkoutList = (props) => {

    const {workouts} = props

    return (
        <div>
            <p>*Workout list here*</p>
            {workouts.map(workout => <Workout {...workouts} key={workout._id}/>)}
        </div>
    )
}

export default WorkoutList