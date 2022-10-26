import React from 'react'
import chef from '../../assets/chef.webp'
import './chef.css'
const ChefDetails = () => {
  return (
    <>
    <h1 className='center'>CHEF</h1>
    <div className="chef-details  center">
        <div className="chef-image">
        <img src={chef} alt="chef" />
        </div>
        <div className="chef-info">
        “When meals become beloved stories, they are conjured, retold and embellished, and the experience returns twofold. Pleasure not only comes from the food itself, but from the meal being a part of something greater.”
        </div>
        
    </div>
    </>
  )
}

export default ChefDetails