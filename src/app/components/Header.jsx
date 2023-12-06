"use client";

import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import NavLink from "./utilities/NavLink";

function Header() {
  const navLinks = [
    {
      id: 1,
      title: `Men's`,
      path: "/category/mens",
    },
    {
      id: 2,
      title: `Women's`,
      path: "/category/womens",
    },
    {
      id: 3,
      title: "Jewelry",
      path: "/category/jewelry",
    },
    {
      id: 4,
      title: "Electronics",
      path: "/category/electronics",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex bg-white md:bg-white/80 backgrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 pt-4">
      <ul className="navbar__menu-left hidden lg:flex flex-1 justify-center items-center">
        {navLinks.map((link) => (
          <li
            className={clsx("", {
              "border-b-4 border-blue-600": pathname === link.path,
            })}
            key={link.id}
          >
            <NavLink url={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
      <div className="hidden flex-1 md:flex items-center justify-center text-3xl md:text-6xl text-zinc-900 font-bold py-4">
        <Link href="/">NextShopAPI</Link>
      </div>
      <div className=" hidden lg:flex flex-1 items-center justify-center">
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
