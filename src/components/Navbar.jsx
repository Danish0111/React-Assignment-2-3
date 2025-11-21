import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex gap-6">
        <li className="hover:underline">
          <Link to="/">Registration Form</Link>
        </li>

        <li className="hover:underline">
          <Link to="/cart">Shopping Cart</Link>
        </li>

        <li className="hover:underline">
          <Link to="/catelog">Product Catelog</Link>
        </li>

        <li className="hover:underline">
          <Link to="/favorite-fruits">Favorite Fruits</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
