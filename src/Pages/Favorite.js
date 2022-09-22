import React, { useEffect } from 'react'
import ButtomMenu from '../Component/ButtomMenu'
import Header from '../Component/Header'
import GradeSharpIcon from '@mui/icons-material/GradeSharp';
import AddIcon from '@mui/icons-material/Add';
import  '../Style/Favorite.css'
import Favoritem from '../Component/Favoritem';
import {Items} from '../Data/Data.js'
import { useStateValue } from '../Component/StateProvider';




function Favorite() {
const[{itemsFavorit}, dispatch] = useStateValue();


  return (
    <div className='FavoritContainer'>
      <h1 className='Myfavorit'>My Favourit</h1>
      {itemsFavorit && itemsFavorit.map((data)=>(
          <Favoritem
          id={data.id}
          name={data.name}
          price={data.price}
          imgSrc = {data.imgSrc}
          />
      ))}
    </div>
  )
}

export default Favorite