import React from "react";
import Workout from "./Workout";

const WorkoutList = (props) => {

    const {workouts} = props

    console.log(workouts)

    const list = workouts.map((workout) => {
        return Object.entries(workout).map(
            (workout_entry) => {
                if(workout_entry === workout.exercises){
                    return Object.entries(workout.exercises).map(
                        (exercise) => exercise
                    )
                } else {
                    return workout_entry
                }
            }
        )
    })

    const otherList = Object.entries(workouts).forEach(([key, value]) => `${key}: ${value}`)

    return (
        <div>
            {/* {workouts.map(workout => <Workout {...workout} key={workout._id}/>)} */}
            {list}
            {/* {otherList} */}
        </div>
    )
}

export default WorkoutList