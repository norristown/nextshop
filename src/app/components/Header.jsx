"use client";

import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import NavLink from "./utilities/NavLink";
import { useCart } from "../context/cart-context";

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
  const { state } = useCart();
  const totalItems = state.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  return (
    <nav className="flex bg-white md:bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
      <ul className="navbar__menu-left hidden lg:flex flex-1 justify-center mt-4">
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
      <div className="hidden flex-1 md:flex items-center justify-center text-5xl text-zinc-900 font-bold py-4">
        <Link href="/">NextShopAPI</Link>
      </div>
      <div className=" hidden lg:flex flex-1 items-center justify-center mt-4">
        <NavLink url="/user">
          <UserIcon className="h-7 w-7" />
        </NavLink>
        <div className="relative">
          <NavLink url="/cart">
            <ShoppingCartIcon className="h-7 w-7" />
            {state.products.length > 0 && (
              <div className="rounded-full bg-rose-700 text-white font-bold text-sm flex justify-center items-center absolute top-3 right-2 w-5 h-5">
                {totalItems}
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
