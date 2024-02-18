import Logo from "@/icons/logo";
import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
import { usePageContext } from "@/context/pageContext";

const Header = () => {
  const { activePage, setActivePageHandler } = usePageContext();

  return (
    <div className={styles.Menu}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <div className={styles.Line}></div>
      <nav className={styles.Navigation}>
        <ul>
          <li className={`${activePage === "Home" ? styles.Active : ""}`}>
            <Link
              onClick={() => {
                setActivePageHandler("Home");
              }}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li
            className={`${activePage === "Destination" ? styles.Active : ""}`}
          >
            <Link
              onClick={() => {
                setActivePageHandler("Destination");
              }}
              href={"/destination"}
            >
              Destination
            </Link>
          </li>
          <li className={`${activePage === "Crew" ? styles.Active : ""}`}>
            <Link
              onClick={() => {
                setActivePageHandler("Crew");
              }}
              href={"/crew"}
            >
              Crew
            </Link>
          </li>
          <li className={`${activePage === "Technology" ? styles.Active : ""}`}>
            <Link
              onClick={() => {
                setActivePageHandler("Technology");
              }}
              href={"/technology"}
            >
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
