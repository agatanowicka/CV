import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home2 from './Components/Home/Home2';
import AboutMe from './Components/AboutMe/AboutMe';
import Technologies from './Components/Technologies/Technologies';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Fragment >
      <Header />
        <Home2 />
        <AboutMe />
        <Technologies />
        <Portfolio />
        <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
