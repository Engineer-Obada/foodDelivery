import React from 'react'
import '../../App.css';                   
import { useEffect, useState } from 'react';
import BannerName from '../Home/BannerName';
import SubMenuContainer from './SubMenuContainer';
import  {MenuItems,Items}  from '../../Data/Data';
import ItemCard from '../Home/ItemCard';
import { useStateValue } from '../../context/StateProvider';
import MenuCard from '../Home/MenuCard';

 function Home() { 
  const[isMainData, setMainData] = useState(
    Items.filter(element => element.itemId === 'buger01')
  );
  const[{total}, dispatch1] = useStateValue();

  useEffect(()=>{
    const menuLi = document.querySelectorAll('#menu li');
    const fav_cont = document.querySelectorAll('.content');
    const menuItem = document.querySelectorAll('.rowMenuCard')
    
    function setMenuActive(){
      menuLi.forEach((n) => n.classList.remove("active"));
      fav_cont.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
      fav_cont[0].classList.add("active");
      console.log(this,"s");
    }

    function setMenuItemActive(){
      menuItem.forEach((n)=> n.classList.remove('active'))
      this.classList.add('active')
    }

    menuLi.forEach( (n)=> n.addEventListener('click',setMenuActive))
    menuItem.forEach((n)=>n.addEventListener('click',setMenuItemActive))



  },[isMainData])

  const setData = (itemId) =>{
    setMainData(Items.filter(element => element.itemId === itemId))
  }

  
  return (
    <>  
    {/* Main Container */}
    <main>
      <div className='mainContainer'>
        {/* banner */}
        <div className='banner'>
          <BannerName name={"Vetri"} discount={" 20"} link={"#"} />
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mofgl96vJfawInHnd8ZC9QRaYxuJYqIlPw&usqp=CAU"}
          className="deliveryPic"
          />
        </div>
        {/* dishContainer */}
       <div className='dishContainer'>
        <div className='menuCard'>
          <SubMenuContainer name={"Menu Category"} />
        </div>
        <div className='rowContainer'>

          { MenuItems && MenuItems.map(data=>(
            <div key={data.id} onClick={()=>setData(data.itemId)} >
              <MenuCard
               imgSrc={data.imgSrc} 
              name={data.name} 
              isActive={data.id===1 ? true : false}
              />
            </div>
          ))}    
        </div>

        <div className='dishitemContainer'>

          {
            isMainData && isMainData.map(data=>(
              
              <ItemCard
              key={data.id}
              itemId={data.id}
               imgSrc={data.imgSrc}
              name={data.name}
              rating={data.ratings}
              price={data.price}
              />       
            ))
          }
        </div>
       </div>
      </div>

    </main>
    </>
  )
}
export default Home;

