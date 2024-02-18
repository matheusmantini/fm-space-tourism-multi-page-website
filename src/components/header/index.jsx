import Logo from "@/icons/logo";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className={styles.Menu}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <div className={styles.Line}></div>
      <nav className={styles.Navigation}>
        <ul>
          <li className={styles.Active}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={activePage === "Destination" ? styles.active : ""}>
            <Link href={"/destination"}>Destination</Link>
          </li>
          <li className={activePage === "Crew" ? styles.active : ""}>
            <Link href={"/crew"}>Crew</Link>
          </li>
          <li className={activePage === "Technology" ? styles.active : ""}>
            <Link href={"/technology"}>Technology</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;