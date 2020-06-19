import React from 'react';
import ProjectDetails from './ProjectDetails';

export default function DetailsInfo(props) {
  return (
    <div className="container1" >
      <img src={props.image} width='100%' height='300px' className='projectImage' alt={props.title}></img>
      <div className="overlay"  > <div className='projectDiv' ><ProjectDetails title={props.title} info={props.info} live={props.live} github={props.github} /></div>
      </div>
    </div>
  );
}
