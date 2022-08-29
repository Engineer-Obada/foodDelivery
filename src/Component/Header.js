import React from 'react'
import {} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import image from  './obada.jpg'

function Header() {
  return <header>
    <img src='https://flyclipart.com/thumb2/burger-energy-food-junk-food-meal-veggie-burger-icon-587826.png' alt='' className='logo' />

    <div className='inputBox'>
        <SearchIcon className='searchIcon' />
        <input type={"text"} placeholder={"Search"}/>
    </div>

    <div className='shoppingCart'>
        <ShoppingCartIcon  className='cart'/>
        <div className='cart_content'>
            <p>2</p>
        </div>
    </div>

    <div className='profioleContainer'>
        <div className='imgBox'>
            <img src={image} alt='sas' 
            className='profilePic'
            />
        </div>
        <h2 className='userName'>Vetrivel Ravi</h2>
    </div>

    <div className='toggleMenu'>
        <BarChartIcon className='toggleIcon' />
    </div>

    
  </header>
}

export default Header