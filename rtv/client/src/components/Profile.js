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
            <h1>Welcome @{username}!</h1>
            <h3>Add an Issue</h3>
            <IssueForm addIssue={addIssue}/>
            <h3>Your Issues</h3>
            <IssueList issues={userIssues}/>
        </div>
    )
}