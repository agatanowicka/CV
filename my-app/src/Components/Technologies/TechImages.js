import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TechImages() {
    return (
        <Container fluid className='techImages'>
            <Row>
                <Col  xs={6} sm={6} md={4} xl={2}>
                    <div className='techItem'>
                    <img className='techImg' src='/images/css.png'></img>
                    <h6 className='imgSubtitle'>CSS3</h6>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={4} xl={2}>
                <div className='techItem'>
                    <img className='techImg' src='/images/react.png'></img>
                    <h6 className='imgSubtitle'>REACT</h6>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={4} xl={2}>
                <div className='techItem'>
                    <img className='techImg' src='/images/html.png' ></img>
                    <h6 className='imgSubtitle'>HTML5</h6>
                    </div>
                </Col>
                <Col xs={6}  sm={6} md={4} xl={2}>
                <div className='techItem'>
                    <img className='techImg' src='/images/bootstrap.png' ></img>
                    <h6 className='imgSubtitle'>BOOTSTRAP 4</h6>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={4} xl={2}>
                <div className='techItem'>
                    <img className='techImg' src='/images/js.png' ></img>
                    <h6 className='imgSubtitle'>JAVASCRIPT</h6>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={4} xl={2}>
                <div className='techItem'>
                    <img className='techImg' src='/images/mongoDB.png' ></img>
                    <h6 className='imgSubtitle'>MONGODB</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}