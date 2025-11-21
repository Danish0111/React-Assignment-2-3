import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import ShoppingCart from "./components/ShoppingCart";
import ProductCatelog from "./components/ProductCatelog";
import FavoriteFruits from "./components/FavoriteFruits";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/catelog" element={<ProductCatelog />} />
        <Route path="/favorite-fruits" element={<FavoriteFruits />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
