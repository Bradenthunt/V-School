import React from "react";
import Workout from "./Workout";

const WorkoutList = (props) => {

    const {workouts} = props

    const fList = workouts.map(workout => 
        <Workout 
            key={workout._id} 
            name={workout.name}
            description={workout.description}
            exercises={workout.exercises}
            _id={workout._id}
            comments={workout.comments}
        />
    )

    return (
        <div>
            {fList}
        </div>
    )
}

export default WorkoutList