import React from 'react';
import Button from 'react-bootstrap/Button';

export default function MoreInfo(props) {
    return (
        <div className='moreInfoDiv'>
            <h1 className='projectDetailsTitle'>{props.title}</h1>
            <p className='projectDetailsInfo'>{props.info}</p>
    {props.live ===''?'':<a href={props.live}><Button variant="light" className='moreInfoBtn'>Live</Button></a> }
           <a href={props.github}><Button  className='moreInfoBtn'variant="outline-light">GitHub</Button></a>
        </div>

    );
}

