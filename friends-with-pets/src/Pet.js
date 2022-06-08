import React from 'react'

export default function Pet(props) {
    return (
        <ul>
            <li>{props.name} is a {props.breed}</li>
        </ul>
    )
}