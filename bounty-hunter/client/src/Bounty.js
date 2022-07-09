import React, { useState } from "react";
import AddBountyForm from "./AddBountyForm";

export default function Bounty(props) {

    const {
        firstName,
        lastName,
        bountyAmount,
        type,
        living,
        _id
    } = props

    const [toggleEdit, setToggleEdit] = useState(false)

    function saveAndExit(updates, bountyId) {
        props.updateBounty(updates, bountyId)
        setToggleEdit(false)
    }

    return (
        <div className="wanted--poster">
            {!toggleEdit ?
                <>
                    <h2>{firstName} {lastName}</h2>
                    <h3>{bountyAmount} credits</h3>
                    <h3>Affiliation: {type}</h3>
                    <h3>{living ? 'Alive' : 'Dead'}</h3>
                    <button onClick={() => props.removeBounty(_id)}>Remove</button>
                    <button onClick={() => setToggleEdit(prevToggle => !prevToggle)}>Edit</button>
                </>
                :
                <>
                    <AddBountyForm 
                        firstName={firstName}
                        lastName={lastName}
                        bountyAmount={bountyAmount}
                        type={type}
                        living={living}
                        _id={_id}
                        btnText="Save"
                        submit={saveAndExit}
                    />
                    <button onClick={() => setToggleEdit(prevToggle => !prevToggle)}>Exit</button>
                </>
            }
        </div>
    )
}