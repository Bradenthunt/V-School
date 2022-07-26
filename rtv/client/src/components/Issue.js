import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons' 
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { IssueContext } from "../context/IssueProvider";
import { useLocation } from 'react-router-dom'

export default function Issue(props) {

    const {user} = useContext(UserContext)
    const {updateIssue, deleteIssue} = useContext(IssueContext)

    const location = useLocation()

    const {
        title,
        description,
        _id,
        comments,
        upVotes,
        downVotes
    } = props

    const [comment, setComment] = useState('')
    const [commentsToggle, SetCommentsToggle] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        updateIssue(_id, {comments: [...comments, {text: comment, username: user.username}]})
        setComment('')
    }

    const isProfilePage = location.pathname.includes('profile')


    return (
        <div className="issue--and--comments">
            <div className="issue">
                <div className="votes">
                    <span onClick={() => updateIssue(_id, {upVoting: true, userId: user._id})}><FontAwesomeIcon icon={faArrowUp} /></span>
                    <h3>{upVotes.length - downVotes.length}</h3>
                    <span onClick={() => updateIssue(_id, {downVoting: true, userId: user._id})}><FontAwesomeIcon icon={faArrowDown} /></span>
                </div>
                <h1>{title}</h1>
                <h3>{description}</h3>
                {isProfilePage && <button className='delete--button' onClick={()=> deleteIssue(_id)}>X</button>}
            </div>
            <p className="comments--toggle" onClick={() => SetCommentsToggle(prevState => !prevState)}>Comments</p>
            <div className="comments--center">
                {commentsToggle && <div className="comments">
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
            
        </div>
    )
}