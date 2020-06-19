import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoToPortfolio from './GoToPortfolio';

export default function AboutMe() {
    return (
        <div className='mainDiv content' id='aboutMe'>
            <Container fluid style={{ marginTop: '50px', marginBottom: '100px' }}>
                <Row>
                    <Col md={7}><div className="mainLeftBorder"><h1 className="mainHeading">O mnie.</h1></div></Col>
                </Row>
                <Row >
                    <Col sm={12} md={12} lg={12} xl={6}>
                        <p className='aboutMeParagraph'>Witaj na moim portfolio. Jestem Agata i od stycznia 2020 roku uczę się front-endu. Do końca 2019 roku moje życie skupiało się głównie na studiach chemicznych. Jednakże wraz z nowym rokiem narodziła się ogromna chęć zmiany, a razem z nią nowa pasja - programowanie. Od tej pory programuję praktycznie każdego dnia. Tworzenie aplikacji webowych oraz stron internetowych stało się moim głównym zajęciem. Jest to dla mnie niezwykle ciekawe, czasami aż trudno jest mi się oderwać od komputera. Programowanie sprawia mi ogromną satysfakcję, dlatego też każdą wolną chwilę przeznaczam na rozwój w tym kierunku. Nową wiedzę zdobywam głównie dzięki oglądaniu licznych kursów informatycznych na takich platformach internetowych jak Udemy czy Pluralsight. Jednakże najcenniejsze lekcje zbieram podczas pracy nad nowymi projektami, które zawsze publikuję na githubie. Obecnie poszukuję pracy jako React developer, najlepiej jako fullstack z backendem w Node.js. Serdecznie zapraszam Cię do obejrzenia moich projektów.</p>
                        <GoToPortfolio />
                    </Col>
                    <Col sm={12} md={12} lg={12} xl={6} className='aboutMeImages' >
                        <img className='imgComputer1 imageAnimation' src='/images/computer1.png' alt='computer1' ></img>
                        <img className='imgLaptop imageAnimation' src='/images/laptop.png' alt='laptop'></img>
                        <img className='imgComputer2 imageAnimation' src='/images/computer2.png' alt='computer2'></img>
                        <img className='imgMouse imageAnimation' src='/images/mouse.png' alt='keyboardAndMouse'></img>
                        <img className='imgComputer3 imageAnimation' src='/images/computer3.png' alt='computer3'></img>
                        <img className='imgSmartfon imageAnimation' src='/images/smartfon.png' alt='smartfon'></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}