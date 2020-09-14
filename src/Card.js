import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='' src='https://robohash.org/test?100x100' />
            <div>
                <h2>{props.name}</h2>
                <p2>{props.email}</p2>
            </div>
        </div>
    )
}

export default Card;