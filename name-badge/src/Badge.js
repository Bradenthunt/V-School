import React from 'react'

export default function Badge(props) {
    return (
        <div className='badge'>
            <h3 className='badge--title'>Badge:</h3>
            <div className='badge--top'>
                <h5 className='badge--top--item margin-right'>Name: {props.firstName} {props.lastName}</h5>
                <h5 className='badge--top--item'>Phone: {props.phoneNumber}</h5>
                <h5 className='badge--top--item margin-right'>Place of Birth: {props.placeOfBirth}</h5>
                <h5 className='badge--top--item'>Favorite Food: {props.favoriteFood}</h5>
                <h5 className='badge--top--item'>Email: {props.email}</h5>
            </div>
            <p className='badge--textarea'>{props.aboutYourself}</p>
        </div>
    )
}