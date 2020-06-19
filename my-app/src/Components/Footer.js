import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function getCurrentDate() {
    let newDate = new Date()
    let year = newDate.getFullYear();
    return year
}

export default function Footer() {
    return (
        <Container fluid className='footerContainer'>
            <Row>
                <Col>
                    <h5 className='footerHeading'>{getCurrentDate()} Agata Nowicka</h5>
                </Col>
            </Row>
        </Container>
    )
}