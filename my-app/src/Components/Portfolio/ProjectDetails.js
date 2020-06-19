import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import AnimatedBorderDiv from "./AnimatedBorderDiv";
import MoreInfo from './MoreInfo';

export default function ProjectDetails(props) {
  const [showDiv, setShowDiv] = useState(true);

  if (showDiv) {
    return (
      <AnimatedBorderDiv >
        <div className='projectDetailsDiv' >
          <h1 className='projectDetailsTitle'>{props.title}</h1>
          <Button
            variant="outline-light"
            onClick={(e) => setShowDiv(false)}>
            Więcej informacji
            </Button>
        </div>
      </AnimatedBorderDiv>
    )
  }
  else {
    return (
      <MoreInfo title={props.title} info={props.info} live={props.live} github={props.github} />
    )
  }
}