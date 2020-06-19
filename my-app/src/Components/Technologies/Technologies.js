import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from './Text';
import TechImages from './TechImages';

export default function Technologies() {
    return (
        <div className='technoDiv'>
            <div className='mainDiv content' id='technologies'>
                <Container fluid style={{ marginTop: '50px' }}>
                    <Row>
                        <Col md={7}>
                            <div className="mainLeftBorder">
                                <h1 className="mainHeading">Technologie.</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={12} lg={12}>
                            <Text />
                        </Col>
                    </Row>
                    <Row >
                        <Col md={12} lg={12}>
                            <TechImages />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}