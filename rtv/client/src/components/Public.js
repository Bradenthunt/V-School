import React, { useContext, useEffect } from "react";
import IssueList from './IssueList'
import { IssueContext } from "../context/IssueProvider";

export default function Public() {

    const {allIssues} = useContext(IssueContext)

    return (
        <div className="public">
            <h1>All Issues</h1>
            <IssueList issues={allIssues}/>
        </div>
    )
}