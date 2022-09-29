import React from 'react'
import MenuContainer from '../Component/MenuContainer';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteIcon from '@mui/icons-material/Favorite';           
import SummarizeIcon from '@mui/icons-material/Summarize';                      
import SettingsIcon from '@mui/icons-material/Settings'; 
import { Link } from 'react-router-dom';

function ButtomMenu() {
  return (
    <div>
         <div className='buttomMenu'>
      <ul id='menu'>
        <MenuContainer  icon={<HomeIcon />} isHome link={'/'}/>
        <MenuContainer  icon={<FavoriteIcon />} link={'/Favorit'}/>
        <MenuContainer  icon={<ChatIcon />} link={'/Addcategory'}/>
        <MenuContainer  icon={<AccountBalanceWalletIcon />}/>
        <MenuContainer link={"#"} icon={<SummarizeIcon />}/>
        <MenuContainer link={"#"} icon={<SettingsIcon />}/>
        <div className='indicator'> </div>
      </ul>
    </div>
    </div>
  )
}

export default ButtomMenu