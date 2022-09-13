import React, { useEffect, useRef, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import GradeSharpIcon from '@mui/icons-material/GradeSharp';
import AddIcon from '@mui/icons-material/Add';
import { Items } from '../Data/Data';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

let cartData = []
function ItemCard({imgSrc,name,rating,price,itemId}) {
    const [isFavourit,setIsfavourit] = useState(false);
    const [currenValue,setICurrenValue] = useState(Math.floor(rating));


    const[isCart, setCart] = useState(null)
    const [{}, dispatch] = useStateValue()

    useEffect(()=>{
        if(isCart){
            cartData.push(isCart)
            dispatch({
                type: actionType.SET_CART,
                cart: cartData
            })
        }
    },[isCart])
  
    const handelClick = (value)=>{
        setICurrenValue(value)
    }

  return (
    <div className='itemCard' id={itemId}>
   
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
                    <i
                     key={i} className={`rating ${currenValue > i ? 'orange' : 'gray'}`}
                    onClick={()=>handelClick(i + 1)}
                    >
                    <GradeSharpIcon />
                    </i>
                     ))}

                <h3 className='price'><span>$</span>{price}</h3>

                </div>
                <i className='addtoCart' onClick={()=>setCart(Items.find(n => n.id === itemId))}>
                    <AddIcon /> 
                </i>
            
            </div>
        </div>
    </div>
  )
}   

export default ItemCard