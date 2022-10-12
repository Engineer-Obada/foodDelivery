import './App.css';
import Home from './Pages/Home'
import {BrowserRouter as Router,
        Routes,
        Route,
        Link
} from 'react-router-dom'
import Favorite from './Pages/Favorite';
import Layout from './Component/Layout/Layout';
import AddProduct from './Pages/AddProduct';

function App () {

  return (
    <Router>
      <div className='App'>
      <Layout /> 
        <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact  path='/Favorit' element={<Favorite />}></Route>
        <Route exact path='/Addcategory' element={<AddProduct />}></Route>
        </Routes>
      </div>
    </Router>

  

  );
}

export default App;
