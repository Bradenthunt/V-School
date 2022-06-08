import React from 'react'
import data from './data'
import Spots from './Spots'

export default function SpotsList() {
    const spotCards = data.map(item => {
        return (
            <Spots
                key={item.id}
                {...item}
            />
        )
    })
    
    return (
        <div className='spots--container'>
            {spotCards}
        </div>
    )
}
