import React from "react";
import IssueList from './IssueList'
import Issue from './Issue'

export default function Public() {

    const {getAllIssues} = useContext(UserContext)

    useEffect(() => {

    }, [])

    return (
        <div className="public">

        </div>
    )
}