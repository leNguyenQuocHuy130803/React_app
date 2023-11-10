import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Products from "./Component/Body/Products";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Login from "./Component/LoginForm/Login";
import Cart from "./Component/CartForm/Cart";
import Notification from "./Component/Notification/Notification";
import Regis from "./Component/Register/Regis";

function App() {
  return (
    <div className="App">
      <Header></Header>

        <Routes>
          <Route path="/carts" element={<Cart />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Regis" element={<Regis />} />
        </Routes>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
