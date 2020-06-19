import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function GoToPortfolio() {
    return (
        <div className='goToPortfolioDiv'>
            <h5 className="headingGoToPortfolio">Idź do portfolio</h5>
            <a href='#portfolio'><Button variant="dark" className='btnGoToPortfolio' ><FaArrowRight className='goToPortfolioIcon' /></Button></a>
        </div>
    )
}