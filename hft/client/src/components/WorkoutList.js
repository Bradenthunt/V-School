import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { WorkoutContext } from "../context/WorkoutProvider";
import ExerciseList from "./ExerciseList";
import Workout from "./Workout";

const WorkoutList = (props) => {

    const {workouts} = props

    // console.log(workouts)

    const list = workouts.map((workout) => {
        return Object.entries(workout).map(
            (thing) => {
                if(thing === workout.exercises){
                    return Object.values(workout.exercises).map(
                        (exercise) => exercise
                    )
                } else {
                    return thing
                }
            }
        )
    })

    const anotherList = workouts.map(workout => {
        if(workout.exercises.length > 0) {

        }
    })

    const otherList = Object.entries(workouts).forEach(([key, value]) => `${key}: ${value}`)

    const {user} = useContext(UserContext)
    const {deleteWorkout, updateWorkout} = useContext(WorkoutContext)

    const location = useLocation()

    const [comment, setComment] = useState('')
    const [commentToggle, setCommentToggle] = useState(false)

    const {
        name,
        description,
        exercises,
        comments,
        _id
    } = props

    const isAllowedOnPage = location.pathname.includes('profile' || 'workout')

    const handleSubmit = (e) => {
        e.preventDefault()
        updateWorkout(_id, {comments: [...comments, {text: comment, username: user.username}]})
        setComment('')
    }

    const finalList = workouts.map(workout => {
        return (
            <div key={workout._id}>
                <h1>{workout.name}</h1>
                <h3>{workout.description}</h3>
                <ExerciseList exercises={workout.exercises}/>
                {isAllowedOnPage && <button className='delete--button' onClick={()=> deleteWorkout(_id)}>X</button>}
                <p className="comments--toggle" onClick={() => setCommentToggle(prevState => !prevState)}>Comments</p>
                {/* {commentToggle && <div className="comments">
                    {comments.map((comment, index) => <p key={index}>@{comment.username}: {comment.text}</p>)}
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text' 
                            name='text'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder='Comment'
                        />
                        <button>Add Comment</button>
                    </form>
                </div>} */}
            </div>
        )
    })

    return (
        <div>
            {/* {workouts.map(workout => <Workout {...workout} key={workout._id}/>)} */}
            {finalList}
            {/* {otherList} */}
        </div>
    )
}

export default WorkoutList