"use client";

import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import NavButton from "./utilities/NavButton";
import NavLink from "./utilities/NavLink";

function Header() {
  return (
    <nav className="flex justify-center bg-white md:bg-white/80 backgrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
      <div className="navbar__menu-left hidden md:flex flex-1 items-center">
        <NavButton url="/mens">Men&apos;s</NavButton>
        <NavButton url="/womens">Women&apos;s</NavButton>
        <NavButton url="/jewelry">Jewelry</NavButton>
        <NavButton url="electronics">Electronics</NavButton>
      </div>
      <div className="hidden flex-1 md:flex items-center justify-center text-3xl md:text-6xl text-zinc-900 font-bold">
        <NavLink url="/" color="user">
          NextShopAPI
        </NavLink>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <NavButton url="/search">
          <UserIcon className="h-7 w-7" />
        </NavButton>
        <NavButton url="/user">
          <ShoppingCartIcon className="h-7 w-7" />
        </NavButton>
      </div>
    </nav>
  );
}

export default Header;
