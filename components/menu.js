import Link from "next/link";

import menuStyle from "./menu.module.css";

export default function Menu() {
  return (
    <ul className={menuStyle.menuContainer}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  );
}
