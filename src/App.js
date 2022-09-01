import './App.css';
import Header from './Component/Header';
import MenuContainer from './Component/MenuContainer';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteIcon from '@mui/icons-material/Favorite';           
import SummarizeIcon from '@mui/icons-material/Summarize';                      
import SettingsIcon from '@mui/icons-material/Settings';                     
import { useEffect } from 'react';
import BannerName from './Component/BannerName';
import SubMenuContainer from './Component/SubMenuContainer';
import MenuCard from './Component/MenuCard';
function App () {

  useEffect(()=>{
    const menuLi = document.querySelectorAll('#menu li');
    function setMenuActive(){
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active")

    }

    menuLi.forEach( (n)=> n.addEventListener('click',setMenuActive))
  },[])


  
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
          <div>
            <MenuCard imgSrc={"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc="} name={"Burger"} />
          </div>

          <div>
            <MenuCard imgSrc={"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc="} name={"Burger"} />
          </div>
          <div>
            <MenuCard imgSrc={"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc="} name={"Burger"} />
          </div>
          <div>
            <MenuCard imgSrc={"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc="} name={"Burger"} />
          </div>
          <div>
            <MenuCard imgSrc={"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc="} name={"Burger"} />
          </div>
          
         
          
        </div>

        <div className='dishitemContainer'></div>
       </div>
      </div>
      <div className='rightMenu'></div>

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
