import React from 'react'

export default function BlogPost(props) {
    return (
        <div className='blog--post'>
            <h2 className='blog--post--title'>{props.title}</h2>
            <h3 className='blog--post--subtitle'>{props.subTitle}</h3>
            <p className='posted'>Posted by <a className='posted--author'>{props.author}</a> on {props.date}</p>
        </div>
    )
}