import React, { useState } from "react";

const Workout = () => {

    const [comment, setComment] = useState('')

    return (
        <div>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <p>{exercises}</p>
            <form onSubmit={}>
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

export default Workout