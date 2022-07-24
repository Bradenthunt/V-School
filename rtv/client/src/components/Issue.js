import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons' 
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { IssueContext } from "../context/IssueProvider";

export default function Issue(props) {

    const {user} = useContext(UserContext)
    const {updateIssue} = useContext(IssueContext)

    const {
        title,
        description,
        _id,
        comments,
        upVotes,
        downVotes
    } = props

    const [comment, setComment] = useState('')

    console.log("upVotes", upVotes)
    console.log('downVotes', downVotes)

    return (
        <div className="issue">
            <div className="votes">
                <span onClick={() => updateIssue(_id, {upVoting: true, userId: user._id})}><FontAwesomeIcon icon={faArrowUp} /></span>
                <h3>{upVotes.length - downVotes.length}</h3>
                <span onClick={() => updateIssue(_id, {downVoting: true, userId: user._id})}><FontAwesomeIcon icon={faArrowDown} /></span>
            </div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            {comments.map(comment => <p>{comment.text} by {comment.username}</p>)}
            <form onSubmit={(e) => {
                e.preventDefault()
                updateIssue(_id, {comments: [...comments, {text: comment, username: user.username}]})
                }}>
                <input
                    type='text' 
                    name='text'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='Comment'
                />
                <button>Add Comment</button>
            </form>
        </div>
    )
}