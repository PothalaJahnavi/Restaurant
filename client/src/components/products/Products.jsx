import React from 'react'
import './products.css';
import {useState} from 'react';
import axios from 'axios';
import {BsSearch} from 'react-icons/bs'
const Products = () => {
    const [search,setSearch]=useState()
    const [data,setData]=useState("");
  const handleClick=()=>{
     
       const url=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
       
        axios.get(url).then((response)=> {
        setData(response.data);
      })
  }
  return (
    <div>
      <div className="">
       <div className="products-heading center" style={{color:"red"}}>Find Meals for your own ingredients</div>

       <div className="products-search center flex max-width">
        <input type="text" placeholder='enter ingredient' id="search-input" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={handleClick} className="search-icon"><BsSearch color='white' size={19}/></button>
       </div>

       <div className="search-results">
        <h1 className='center'style={{color:"orange"}}>Your Results</h1>
         <div className="all-meals">
            <div className="meal-details">
                <div className="meal-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHTn9CXJ-3Z-AencASjEYhspP1Q2zgleb4w&usqp=CAU" alt="Sample image" />
                </div>
                <div className="meal-contents">
                 <h2 className="meal-name" style={{color:"orange"}}>food</h2>
                 <a href="" className='get-recpie'>Get Recipie</a>
                </div>
            </div>
            <div className="meal-details">
                <div className="meal-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHTn9CXJ-3Z-AencASjEYhspP1Q2zgleb4w&usqp=CAU" alt="Sample image" />
                </div>
                <div className="meal-contents">
                 <h2 className="meal-name">food</h2>
                 <a href="#" className='get-recpie'>Get Recipie</a>
                </div>
            </div>
            {
                data.meals?(data.meals).map((item,index)=>{
                    return(
                        <div className="meal-details">
                <div className="meal-image">
                    <img src={item.strMealThumb} alt="Sample image" />
                </div>
                <div className="meal-contents">
                 <h2 className="meal-name">{item.strMeal}</h2>
                 <a href="" className='get-recpie'>Get Recipie</a>
                </div>
                 </div>
                    )
                }):
                <h1>no items</h1>
            }
            

         </div>
       </div>
      </div>
    </div>
  )
}

export default Products
