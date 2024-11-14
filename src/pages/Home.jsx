import React from 'react';
import mainbg from "../../public/mainbg.jpg"
import { Link } from 'react-router-dom';
import "../styles/HomeStyles.css";


export const Home = () => {
  return (
    <>
      <div
        className="home" style={{backgroundImage: `url(${mainbg})`}}>
          <div className='headcontainer'>
            <h1>The Urban Light</h1>
            <p>Best Restuarnt chains in Pakistan</p>
            <Link to="/menu">
            <button>Book Now</button>
            </Link>
          </div>
        </div>
    </>
  );
};
