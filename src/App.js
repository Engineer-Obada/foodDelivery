import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Favorite from "./Pages/Favoirt/Favorite";
import Layout from "./Component/Layout/Layout";
import AddProduct from "./Pages/AddProduct/AddProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
        <Routes>
          <Route exact path="/foodDelivery" element={<Home />}></Route>
          <Route exact path="/Favorit" element={<Favorite />}></Route>
          <Route exact path="/Addcategory" element={<AddProduct />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
