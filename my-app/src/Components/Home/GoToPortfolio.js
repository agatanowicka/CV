import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from 'react-icons/fa';


export default function GoToPortfolio() {
    return (
        <div className='goToPortfolioDiv'>
            <h5 className="goToPortfolioHeading">Odwiedż moje portfolio</h5>
           <a href='#portfolio'><Button variant="dark" className='goToPortfolioBtn' ><FaArrowRight className='goToPortfolioIcon'/></Button></a> 
        </div>
    )
}