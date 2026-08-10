import "./App.css";
import Navbar from "./components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicePage from "./pages/ServicePage";
import Contact from "./pages/Contact";
import MenCollection from "./pages/MenCollection";
import WomenCollection from "./pages/WomenCollection";
import Accessories from "./pages/Accessories";
import NewArrivals from "./pages/NewArrivals";
import AddCart from "./pages/AddCart";
import Checkout from "./pages/Checkout";
import Footer from "./components/common/Footer";
import Register from "./pages/auth/Register";
import ShippingPolicy from "./pages/customercare/ShippingPolicy";
import ReturnsRefunds from "./pages/customercare/ReturnsRefunds";
import PrivacyPolicy from "./pages/customercare/PrivacyPolicy";
import TermsConditions from "./pages/customercare/TermsConditions";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./components/common/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Collections */}
        <Route path="/men" element={<MenCollection />} />
        <Route path="/women" element={<WomenCollection />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />

        {/* Product Details */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Shopping */}
        <Route path="/addCart" element={<AddCart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Customer Care */}
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/returns" element={<ReturnsRefunds />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
