import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import BookDescription from "./pages/BookDetails";
import Shop from "./pages/Shop";
import SignIn from "./components/Signin/Signin"
import Signup from "./components/Signup/Signup"
import ContactUs from "./pages/Contact"
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/description" element={<BookDescription/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Routes>
  );
}

export default App;
