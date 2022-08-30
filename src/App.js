import './App.css';
import Header from './Component/Header';
import MenuContainer from './Component/MenuContainer';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteIcon from '@mui/icons-material/Favorite';           
import SummarizeIcon from '@mui/icons-material/Summarize';                      
import SettingsIcon from '@mui/icons-material/Settings';                     
function App () {
  return (
    <div className="App">
    {/* Header */}
    <Header />
    {/* Main Container */}

    <main>
      <div className='mainContainer'>
        <div className='rightMenu'>
        </div>
      </div>
    </main>
    {/* Bottom Menu */}
    <div className='buttomMenu'>
      <ul className='menu'>
        <MenuContainer link={"#"} icon={<HomeIcon />}/>
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
