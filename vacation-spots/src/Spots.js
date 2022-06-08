import React from 'react'

export default function Spots(props) {
    // let backChange = document.getElementById('back-change')
    
    return (
        <div id='back-change' className='spots--card--full'>
            <div className='spots--card--top'>
                <h2 className='spots--place'>Destination: {props.place}</h2>
                {props.price < 500 && <h3 className='spots--cost'>$</h3>}
                {props.price < 1000 && props.price > 500 && <h3 className='spots--cost'>$$</h3>}
                {props.price > 1000 && <h3 className='spots--cost'>$$$</h3>}
            </div>
            <div className='spots--card'>
                <h3 className='spots--price'>Cost: ${props.price}</h3>
                <h3 className='spots--time'>Time of Year: {props.timeToGo}</h3>

                {/* not sure how to get the card to change its background */}
                {/* {props.timeToGo === 'Spring' && backChange.style.backgroundColor = 'pink'} */}
                {/* {props.timeToGo === 'Summer' && <div className='background-summer'></div>}
                {props.timeToGo === 'Fall' && <div className='background-fall'></div>}
                {props.timeToGo === 'Winter' && <div className='background-winter'></div>} */}
            </div>
        </div>
    )
}