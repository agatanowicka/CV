import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoToPortfolio from './GoToPortfolio';

export default function Home() {
    return (
        <div className='homeContainerBackground'>
            <Container fluid className="home" id='home'>
                <Row className='mainRow'>
                    <Col md={8} >
                        <h1 className='homeHeading1'>FRONT-END DEVELOPER</h1>
                        <h5 className='homeHeading5'>AGATA NOWICKA</h5>
                        <GoToPortfolio />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}