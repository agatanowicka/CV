import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className='mainDiv content' id='contact'>
            <Container fluid style={{ marginTop: '50px' }} >
                <Row>
                    <Col><div className='mainLeftBorder'><h1 className="mainHeading">Kontakt.</h1> </div></Col>
                </Row>
                <Row >
                    <Col className='contactCol'>
                    <video className='videoTag' autoPlay loop muted> <source src="/images/fluid.mp4" type="video/mp4" /></video>
                        <div className='contactDiv'>
                            <MdEmail className='contactIcon' />
                            <h3 className='contactText'>agata.nowicka1996@wp.pl</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}