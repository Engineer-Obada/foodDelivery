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
import CartIttem from './Component/CartIttem';
import { useStateValue } from './Component/StateProvider';
import Home from './Pages/Home'
import {BrowserRouter as Router,
        Routes,
        Route,
        Link
} from 'react-router-dom'
import Favorite from './Pages/Favorite';
import ButtomMenu from './Component/ButtomMenu';
import Layout from './Component/Layout/Layout';

function App () {

  return (
    <Router>
      <div className='App'>
      <Layout /> 
        <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact  path='/Favorit' element={<Favorite />}></Route>
        </Routes>
      </div>
    </Router>

  

  );
}

export default App;
