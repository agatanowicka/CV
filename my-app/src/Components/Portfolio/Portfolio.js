import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DetailsInfo from "./DetailsInfo";
import allProjects from './data';

export default function Portfolio(data) {
    return (
        <div className='mainDiv' id='portfolio'>
            <Container fluid style={{ marginTop: '50px' }}>
                <Row >
                    <Col><div className='mainLeftBorder'><h1 className="mainHeading">Portfolio.</h1></div></Col>
                </Row>
                <Row className='portfolioRow'>
                    {allProjects.map(project => {
                        return (<Col md={6} className='portfolioCol'><DetailsInfo title={project.title} info={project.info} image={project.image} live={project.live} github={project.github} /></Col>)
                    })}
                </Row>
            </Container>
        </div>
    )
}