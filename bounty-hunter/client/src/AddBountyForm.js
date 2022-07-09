import React, { useState } from "react";

export default function AddBountyForm(props) {

    const initialInputs = {
        firstName: props.firstName || '',
        lastName: props.lastName || '',
        bountyAmount: props.bountyAmount || '',
        living: props.living || true,
        type: props.type || ''
    }

    const [inputs, setInputs] = useState(initialInputs)

    function handleChange(e) {
        const {name, value} = e.target

        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initialInputs)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                value={inputs.firstName} 
                onChange={handleChange} 
                placeholder="First Name" 
                required
            />
            <input 
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange} 
                placeholder="Last Name" 
                required
            />
            <input 
                type="number" 
                name="bountyAmount" 
                value={inputs.bountyAmount} 
                onChange={handleChange} 
                placeholder="Bounty Amount" 
                required
            />
            <label>
                Alive?
                <input 
                    type="checkbox"
                    name="living"
                    onChange={handleChange}
                />
            </label>
            <input 
                type="text" 
                name="type" 
                value={inputs.type} 
                onChange={handleChange} 
                placeholder="Sith or Jedi?" 
                required
            />
            <button>{props.btnText}</button>
        </form>
    )
}