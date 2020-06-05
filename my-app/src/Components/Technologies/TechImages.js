import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TechImages() {
    return (
        <Container fluid className='techImages'>
            <Row>
                <Col sm={3} md={2}>
                    <img className='techImg' src='/images/css.png'></img>
                    <video className='techVideoTag' autoPlay loop muted> <source src="/images/fluid2.mp4" type="video/mp4" /></video>
                    <h6 className='imgSubtitle'>CSS3</h6>
                </Col>
                <Col sm={3} md={2}>
                    <img className='techImg' src='/images/react.png'></img>
                    <video className='techVideoTag' autoPlay loop muted> <source src="/images/fluid2.mp4" type="video/mp4" /></video>
                    <h6 className='imgSubtitle'>REACT</h6>
                </Col>
                <Col sm={3} md={2}>
                    <img className='techImg' src='/images/html.png' ></img>
                    <video className='techVideoTag' autoPlay loop muted> <source src="/images/fluid2.mp4" type="video/mp4" /></video>
                    <h6 className='imgSubtitle'>HTML5</h6>
                </Col>
                <Col sm={3} md={2}>
                    <img className='techImg' src='/images/bootstrap.png' ></img>
                    <video className='techVideoTag' autoPlay loop muted> <source src="/images/fluid2.mp4" type="video/mp4" /></video>
                    <h6 className='imgSubtitle'>BOOTSTRAP 4</h6>
                </Col>
                <Col sm={3} md={2}>
                    <img className='techImg' src='/images/js.png' ></img>
                    <video className='techVideoTag' autoPlay loop muted> <source src="/images/fluid2.mp4" type="video/mp4" /></video>
                    <h6 className='imgSubtitle'>JAVASCRIPT</h6>
                </Col>
                <Col sm={3} md={2}>
                    <img className='techImg' src='/images/mongoDB.png' ></img>
                    <video className='techVideoTag' autoPlay loop muted> <source src="/images/fluid2.mp4" type="video/mp4" /></video>
                    <h6 className='imgSubtitle'>MONGODB</h6>
                </Col>
            </Row>
        </Container>
    )
}