import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import sa from '../images/sa.png'
function Food() {
  return (
    <div className='rowfoodCard'>
        <div className='imgContainer'>
            <div className='imgBox'>
            <img src={sa} />

            </div>
        </div>

        <div className='body'>
        <div className='favorit'>
           <span><FavoriteIcon /></span>
        </div>
        <div className='content'>
        <h2>Burger Bistro</h2>
        <span><StarBorderIcon /></span>
        <span><StarBorderIcon /></span>
        <span><StarBorderIcon /></span>



        <span><StarBorderIcon /></span>
        <span><StarBorderIcon /></span>
        </div>
        <div className='add'>
            <AddCircleOutlineIcon />
        </div>
        </div>
        <div className='price'>
            <span>$</span>
            <p>7.5</p>
        </div> 
       
        
      

    </div>
  )
}

export default Food