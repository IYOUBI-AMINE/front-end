import React from 'react';
import './NewsLetter.css';
import { Link } from 'react-router-dom'; 
import cyber from '../Assets/cyber.jpeg'

const NewsLetter = () => {
  return (
    <div className="deal-of-the-day-container1">
      <div className="deal-of-the-day-container">
        <div className="deal-of-the-day-container2">
          <p className="deal-of-the-day-title">Deal of The Day</p>
          <p className="deal-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros get tincidunt
          </p>
          <div className="countdown-timer-container">
            <div className="countdown-container">
              <p className="countdown-days">08</p>
              <p className="countdown-days1">Days</p>
            </div>
            <div className="time-container">
              <p className="countdown-days">09</p>
              <p className="countdown-days1">Hours</p>
            </div>
            <div className="time-container">
              <p className="countdown-days">14</p>
              <p className="countdown-days1">Min</p>
            </div>
          </div>
        </div>
        
        <div className="button">
                <Link to='/mens' style={{ textDecoration: 'none', color: 'black'  }} >
                <button >Check Now</button>
                </Link>
                    
                </div>
      </div>
      
     
        <div className="image-container1">
          <img src={cyber} alt="" />
          
        </div>
      
    </div>
  );
};

export default NewsLetter;




