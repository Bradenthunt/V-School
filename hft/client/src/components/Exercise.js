import React, { useState } from "react";

const Exercise = (props) => {

    const {
        name,
        description,
        sets,
        reps,
        _id
    } = props

    return (
        <div>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <h3>{sets}</h3>
            <h3>{reps}</h3>
        </div>
    )
}

export default Exercise