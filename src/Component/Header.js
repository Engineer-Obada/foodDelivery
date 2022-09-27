import React, { useEffect } from 'react'
import {} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import image from  './obada.jpg'
import { useStateValue } from './StateProvider';
function Header() {

    const[{cart}, dispatch] = useStateValue();


    useEffect(()=>{
        const toggleMenu = document.querySelector(".toggleMenu")
      
        toggleMenu.addEventListener('click',()=>{
            document.querySelector(".rightMenu").classList.toggle('active')
        })
    },[])
  return <header>
    <img src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc' alt='' className='logo' />

    <div className='inputBox'>
        <SearchIcon className='searchIcon' />
        <input type={"text"} placeholder={"Search"}/>
    </div>

    <div className='shoppingCart'>
        <ShoppingCartIcon  className='cart'/>
        <div className='cart_content'>
            <p>{cart.length}</p>
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