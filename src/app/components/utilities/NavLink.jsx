import Link from "next/link";

function NavLink({ children, url, className }) {
  return (
    <Link
      className={`flex mb-2 hover:bg-blue-600 hover:text-zinc-100 cursor-pointer transition-colors duration-100 p-5 rounded ${className}`}
      href={url}
    >
      {children}
    </Link>
  );
}

export default NavLink;
