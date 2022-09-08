import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import GradeSharpIcon from '@mui/icons-material/GradeSharp';
import AddIcon from '@mui/icons-material/Add';
function ItemCard({imgSrc,name,rating,price}) {
    const [isFavourit,setIsfavourit] = useState(false);
    
  return (


    <div className='itemCard'>
        <div className={`isfavourite ${isFavourit ? 'active' : ' '}`} 
        onClick={()=>setIsfavourit(!isFavourit)} >
            <FavoriteIcon />
        </div>
        <div className='imgBox'>
            <img src={imgSrc} className='itemImg'/>
        </div>
        <div className='itemContent'>
            <h3 className='itemName'>{name}</h3>
            <div className='bottom'>
                <div className='rating '>
                    {Array.apply(null,{length: 5}).map((e,i)=>(
                    <i key={i} className='ff'
                    
                    ><GradeSharpIcon /></i>
                     ))}

                <h3 className='price'><span>$</span>{price}</h3>

                </div>
                <i className='addtoCart'>
                    <AddIcon /> 
                </i>
            </div>
        </div>
    </div>
  )
}   

export default ItemCard