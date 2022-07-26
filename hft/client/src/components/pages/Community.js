import React, { useContext } from "react";
import { WorkoutContext } from "../../context/WorkoutProvider";
import WorkoutList from "../WorkoutList";

const Community = () => {

    const {allWorkouts} = useContext(WorkoutContext)

    return (
        <div className="community">
            <h1 className="community--title">Community</h1>
            <WorkoutList workouts={allWorkouts}/>
        </div>
    )
}

export default Community