import React from 'react'
import Friend from './Friend'
import data from './data'

export default function FriendList() {
    const friends = data.map(item => {
        return (
            <Friend
                key={item.name}
                {...item}
            />
        )
    })
    
    return (
        <div className='friend--list'>
            {friends}
        </div>
    )
}