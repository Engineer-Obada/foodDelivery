import './App.css';
import Header from './Component/Header';
import MenuContainer from './Component/MenuContainer';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteIcon from '@mui/icons-material/Favorite';           
import SummarizeIcon from '@mui/icons-material/Summarize';                      
import SettingsIcon from '@mui/icons-material/Settings';                     
import { useEffect, useState } from 'react';
import BannerName from './Component/BannerName';
import SubMenuContainer from './Component/SubMenuContainer';
import MenuCard from './Component/MenuCard';
import  {MenuItems,Items}  from './Data/Data';
import ItemCard from './Component/ItemCard';
import DebitCard from './Component/DebitCard';
function App () {

  const[isMainData, setMainData] = useState(
    Items.filter(element => element.itemId === 'buger01')
  )
 
  useEffect(()=>{
    const menuLi = document.querySelectorAll('#menu li');
    const menuItem = document.querySelectorAll('.rowMenuCard')
    
    function setMenuActive(){
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active")

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
    <div className="App">
    {/* Header */}
    <Header />
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
      <div className='rightMenu'>
        <div className='debitCardContainer'>
          <div className='debitCard'>
            <DebitCard />
          </div>
        </div>
      </div>

    </main>
    {/* Bottom Menu */}
    <div className='buttomMenu'>
      <ul id='menu'>
        <MenuContainer link={"#"} icon={<HomeIcon />} isHome />
        <MenuContainer link={"#"} icon={<ChatIcon />}/>
        <MenuContainer link={"#"} icon={<AccountBalanceWalletIcon />}/>
        <MenuContainer link={"#"} icon={<FavoriteIcon />}/>
        <MenuContainer link={"#"} icon={<SummarizeIcon />}/>
        <MenuContainer link={"#"} icon={<SettingsIcon />}/>
        <div className='indicator'> </div>
      </ul>
    </div>
    </div>
  );
}

export default App;
