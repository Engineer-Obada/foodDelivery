import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
function ItemCard({imgSrc,name,rating,price}) {
  return (
    <div className='itemCard'>
        <div className='isfavourite'>
            <FavoriteIcon />
        </div>
        <div className='imgBox'>
            <img src={imgSrc}/>
        </div>
        <div className='itemContent'>
            <h3>{name}</h3>
            <div className='bottom'>
                <div className='rating'>
                    {Array.apply(null,{length: 5}).map((e,i)=>(
                    <i key={i}><StarBorderIcon /></i>
                     ))}
                </div>
                <h3 className='price'><span>$</span>{price}</h3>
                <i className='addtoCart'>
                    <AddIcon />
                </i>
            </div>
        </div>
    </div>
  )
}   

export default ItemCard