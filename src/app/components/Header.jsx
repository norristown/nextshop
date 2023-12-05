"use client";

import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLink from "./utilities/NavLink";

function Header() {
  const navLinks = [
    { title: `Men's`, path: "/mens" },
    { title: `Women's`, path: "/womens" },
    { title: "Jewelry", path: "/jewelry" },
    { title: "Electronics", path: "/electronics" },
  ];
  return (
    <nav className="flex justify-center bg-white md:bg-white/80 backgrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
      <div className="navbar__menu-left hidden md:flex flex-1 items-center">
        {navLinks.map((link) => (
          <div key={link.title}>
            <NavLink url={link.path}>{link.title}</NavLink>
          </div>
        ))}
      </div>
      <div className="hidden flex-1 md:flex items-center justify-center text-3xl md:text-6xl text-zinc-900 font-bold py-4">
        <Link href="/">NextShopAPI</Link>
      </div>
      <div className=" hidden md:flex flex-1 items-center justify-end">
        <NavLink url="/search">
          <UserIcon className="h-7 w-7" />
        </NavLink>
        <NavLink url="/user">
          <ShoppingCartIcon className="h-7 w-7" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
