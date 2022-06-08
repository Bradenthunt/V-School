import React from 'react'
import BlogPost from './BlogPost'
import data from './data'

export default function BlogList() {
    const post = data.map(item => {
        return (
        <BlogPost
            key={item.id}
            {...item}
        />
        )
    })
    
    return (
        <div>
            <div className='post--container'>
                {post}
            </div>
            <div className='button--container'>
                <button>Older Posts →</button>
            </div>
        </div>
    )
}