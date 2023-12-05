import Link from "next/link";

function NavLink({ children, url }) {
  return (
    <Link
      className={`flex hover:bg-slate-300 cursor-pointer transition-colors duration-100 m-2 p-5 rounded`}
      href={url}
    >
      {children}
    </Link>
  );
}

export default NavLink;
