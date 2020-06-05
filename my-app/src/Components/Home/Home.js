import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoToPortfolio from './GoToPortfolio';

export default function Home() {
    return (
        <div>
            <Container fluid className="home" id='home'>
                <Row className='mainRow'>
                    <Col md={6}>
                    <img className='backgroundToHomeImg' src='/images/background.png'></img>
                        <h1 className='homeHeading1'>FRONT-END DEVELOPER</h1>
                        <h5 className='homeHeading5'>AGATA NOWICKA</h5>
                        <GoToPortfolio />
                    </Col>
                    <Col md={6}className='homeImages'>
                        <img className='homeImgThink1 imageAnimation' src='/images/think1.png'  width='40%'height='120px'></img>
                        <img className='homeImgThink2 imageAnimation' src='/images/think2.png'  width='35%'height='120px'></img>
                        <img className='homeImgThink3 imageAnimation' src='/images/think3.png'  width='30%'height='100px'></img>
                        <img className='homeDevImg' src='/images/developer.png' width='100%'height='350px'></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}