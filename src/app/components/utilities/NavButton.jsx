import Link from "next/link";

function NavButton({ url, children }) {
  return (
    <Link
      className="flex text-gray-600 hover:bg-slate-200 cursor-pointer transition-colors duration-100 m-1 p-5 rounded-lg"
      href={url}
    >
      {children}
    </Link>
  );
}

export default NavButton;
