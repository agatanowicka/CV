import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import technoData from './technoData';

export default function TechImages(props) {
    return (
        <Container fluid className='techImages'>
            <Row>
                {technoData.map((techno, id) => {
                    return (
                        <Col xs={6} sm={6} md={4} xl={2} key={id}>
                            <div className='techItem'>
                                <img className='techImg' src={techno.image} alt={techno.title}></img>
                                <h6 className='imgSubtitle'>{techno.title}</h6>
                            </div>
                        </Col>
                    )
                })}

            </Row>
        </Container>
    )
}