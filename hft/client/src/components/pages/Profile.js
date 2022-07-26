import React from "react";
import WorkoutList from '../WorkoutList.js'

const Profile = () => {


    return (
        <div>
            <h1>Welcome @username!</h1>
            <h3>Your Past Workout</h3>
            <WorkoutList />
        </div>
    )
}

export default Profile