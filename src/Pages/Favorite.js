import React, { useEffect } from 'react'
import  '../Style/Favorite.css'
import Favoritem from '../Component/Favoritem';
import { useStateValue } from '../Component/StateProvider';




function Favorite() {

const[{itemsFavorit}, dispatch] = useStateValue();

  return (
    <div className='FavoritContainer'>
      {/* <h1 className='Myfavorit'>My Favourit</h1>
 */}

      {itemsFavorit.length >  0  ? itemsFavorit.map((data)=>(
          <Favoritem
          key={data.id}
          id={data.id}
          name={data.name}
          price={data.price}
          imgSrc = {data.imgSrc}
          />
      )) : 
        <div className="notfound">
          <img src={"https://study91.co.in/Scripts/assets/images/prasad_img/no-product-found.png"} alt={"Not Found"} />
        </div>
     }
     
    </div>
  )
}

export default Favorite