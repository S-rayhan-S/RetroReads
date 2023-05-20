import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import BookDescription from "./pages/BookDetails";
import Shop from "./pages/Shop";
import SignIn from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import ContactUs from "./pages/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart/Cart";
import AddBook from "./components/Dashboard/Pages/AddBook";
import UpdateBook from "./components/Dashboard/Pages/UpdateBook";
import BookList from "./components/Dashboard/Pages/BookList";
import Orders from "./components/Dashboard/Pages/Orders";
import { CartProvider } from "react-use-cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/description/:id" element={<BookDescription />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/updatebook/:id" element={<UpdateBook />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout/>} />

      </Routes>
    </CartProvider>
  );
}

export default App;
