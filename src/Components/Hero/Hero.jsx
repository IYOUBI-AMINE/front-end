import React from 'react';
import './Hero.css'
import { Link } from 'react-router-dom'; 


import hero_img from '../Assets/hero_img.png'


const Hero = () => {
    return(
        <div className='hero'>
            <div className="hero-left">
                               
            
                <h1>EXCLUSIVE</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST </p>
                <p>SELLERS PRODUCTS</p>
                <div className="button">
                <Link to='/mens' style={{ textDecoration: 'none', color: 'black'  }} >
                <button >Check Now</button>
                </Link>
                    
                </div>
                
                    
                
            </div>
                <div className="hero-right">
                <img src={hero_img} alt="" />
            </div>
        </div>
    )
}
export default Hero