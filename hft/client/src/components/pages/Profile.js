import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider.js";
import { WorkoutContext } from "../../context/WorkoutProvider.js";
import WorkoutList from '../WorkoutList.js'

const Profile = () => {

    const {user: {username}} = useContext(UserContext)
    const {userWorkouts} = useContext(WorkoutContext)

    return (
        <div>
            <h1 className="profile--title">@{username}, ready to feel the pump?</h1>
            <h3 className="profile--title">Your Past Workouts</h3>
            <WorkoutList workouts={userWorkouts}/>
        </div>
    )
}

export default Profile