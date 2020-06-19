import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DetailsInfo from "./DetailsInfo";
import allProjects from './data';

export default function Portfolio(data) {
    return (
        <div className='portfolioDiv'>
            <div className='mainDiv content' id='portfolio'>
                <Container fluid style={{ marginTop: '50px' }}>
                    <Row >
                        <Col><div className='mainLeftBorder'><h1 className="mainHeading">Portfolio.</h1></div></Col>
                    </Row>
                    <Row className='portfolioRow'>
                        {allProjects.map((project, id) => {
                            return (<Col md={10} lg={6} xl={6} className='portfolioCol' key={id}><DetailsInfo key={id} title={project.title} info={project.info} image={project.image} live={project.live} github={project.github} /></Col>)
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    )
}