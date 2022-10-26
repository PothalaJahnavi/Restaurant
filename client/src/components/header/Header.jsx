import React from 'react'
import './header.css';
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from "react-router-dom";
const Header = () => {

  return (
    <>
    <div className='header'>
      <div className="max-width contents">
         <div className="header-heading">
          Welcome to our Restaurant 
          </div>
         <div className="header-subheading ">
         All We have is &nbsp;
         <span>
         <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: 'red',
          fontWeight: 700,
          fontSize: '1.5em',
          fontSize:'60px',
        }}
        startDelay={2000}
        cursorColor="red"
        multiText={[
          'Tasty food', 'Breakfast', 'Lunch', 'Dinner','Wines by the glass','Late night specials','Weekend Brunch','Private Dining Rooms','Coffee all day'
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={30}
      />
          </span>
         </div>
         <div className="header-buttons">
         <button className='for-button center'>
          <Link to="/register"> Register </Link>
          </button><br /><br />
          <button className='for-button center'>          
          <Link to="/login"> Login </Link>
           </button> 
         </div>
      </div>
    </div>
    </>
  )
}

export default Header


