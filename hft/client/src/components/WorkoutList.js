import React from "react";
import Workout from "./Workout";

const WorkoutList = (props) => {

    const {workouts} = props

    return (
        <div>
            {workouts.map(workout => <Workout {...workout} key={workout._id}/>)}
        </div>
    )
}

export default WorkoutList