"use client";

import NavButton from "./utilities/NavButton";
import NavLink from "./utilities/NavLink";
import Search from "../../../assets/icons/search-svgrepo-com.svg";
import User from "../../../assets/icons/user-svgrepo-com.svg";
// import Cart from "../../../../assets/icons/cart-shopping-svgrepo-com.svg";
// import NavLink from "./NavLink";

function Header() {
  return (
    <div className="flex items-center justify-center">
      <nav className="flex justify-around bg-white/80 backgrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
        <div className="navbar__menu-left h-100 items-center hidden lg:flex">
          <ul className="flex flex-row">
            <NavLink url="/men">Men</NavLink>
            <NavLink url="/women">Women</NavLink>
            <NavLink url="/tech">Tech</NavLink>
          </ul>
        </div>
        <div className="flex items-center text-6xl text-zinc-900 font-s ">
          <NavLink url="/" color="user">
            NextShopAPI
          </NavLink>
        </div>
        <div className="flex items-center">
          <NavButton url="/search">User</NavButton>
          <NavButton url="/user">Cart</NavButton>
        </div>
      </nav>
    </div>
  );
}

export default Header;
