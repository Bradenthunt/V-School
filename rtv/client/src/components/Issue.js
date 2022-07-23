import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons' 
import React, { useState } from "react";

export default function Issue(props) {

    const {
        title,
        description,
        _id,
        comments,
        updateIssue
    } = props

    const [comment, setComment] = useState('')

    return (
        <div className="issue">
            <div className="votes">
                <span onClick={() => updateIssue(_id)}><FontAwesomeIcon icon={faArrowUp} /></span>
                <h3>*Total Votes*</h3>
                <span onClick={() => updateIssue(_id)}><FontAwesomeIcon icon={faArrowDown} /></span>
            </div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <p>{comments}</p>
            <form onSubmit={() => updateIssue(_id)}>
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