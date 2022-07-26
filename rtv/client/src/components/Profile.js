import React, { useContext } from "react";
import IssueForm from './IssueForm'
import IssueList from './IssueList'
import { UserContext } from "../context/UserProvider";
import { IssueContext } from "../context/IssueProvider";

export default function Profile() {

    const {user: {username}} = useContext(UserContext)
    const {addIssue, userIssues} = useContext(IssueContext)

    return (
        <div className="profile">
            <h1 className="profile--name">Welcome @{username}!</h1>
            <div className="profile--add--issue">
                <h3>Add an Issue</h3>
                <IssueForm addIssue={addIssue}/> 
            </div>
            <div className="profile--your--issues">
                <h2 className="profile--issue--title">Your Issues</h2>
                <IssueList issues={userIssues}/>
            </div>
        </div>
    )
}