import React from 'react'

export default function Square(props) {
    return (
        <div 
            className="square"
            style={{background: props.color}}
        >
        </div>
    )
}