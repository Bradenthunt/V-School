import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { WorkoutContext } from "../context/WorkoutProvider";
import ExerciseList from "./ExerciseList";

const Workout = (props) => {

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

    const isAllowedOnPage = location.pathname.includes('profile')

    const handleSubmit = (e) => {
        e.preventDefault()
        updateWorkout(_id, {comments: [...comments, {text: comment, username: user.username}]})
        setComment('')
    }

    return (
        <div className="workout">
            <div className="workout--layout">
               <div>
                    <div className="workout--name-description">
                        <h1>{name}</h1>
                        <h3>{description}</h3>
                    </div>
                    <ExerciseList exercises={exercises}/>
                </div>
                {isAllowedOnPage && <button className='delete--button' onClick={()=> deleteWorkout(_id)}>X</button>} 
            </div>
            <p className="comments--toggle" onClick={() => setCommentToggle(prevState => !prevState)}>Comments</p>
            {commentToggle && 
                <div className="comments">
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
                </div>}
        </div>
    )
}

export default Workout