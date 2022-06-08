import React from 'react'
import Pet from './Pet'

export default function Friend(props) {
    const animals = props.pets.map(item => {
        return (
            <Pet 
                key={item.name}
                {...item}
            />
        )
    })
    
    return (
        <div className='friend--card'>
            <div className='friend--card--top'>            
                <h1 className='friend--name'>{props.name}</h1>
                <h3>Age: {props.age}</h3>
            </div>
            <div className='friend--pets'>
                <h3>Pets: </h3>
                {animals}
            </div>
        </div>
    )
}