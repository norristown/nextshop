import Link from "next/link";

function MenuOverlay({ links }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MenuOverlay;
