import Link from "next/link";

function NavLink({ children, url }) {
  return (
    <li className="list-none">
      <Link
        className="flex text-gray-600 hover:bg-slate-200 cursor-pointer transition-colors duration-300 m-2 p-5 rounded"
        href={url}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
