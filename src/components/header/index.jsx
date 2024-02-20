import { usePageContext } from "@/context/pageContext";
import CloseIcon from "@/icons/close";
import Logo from "@/icons/logo";
import MenuIcon from "@/icons/menu";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.scss";

const Header = () => {
  const { activePage, setActivePageHandler } = usePageContext();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const mobileMenuHandler = (newStatus) => {
    setMobileMenuIsOpen(newStatus);
  };

  return (
    <div className={styles.Menu}>
      <div className={styles.Logo}>
        <Logo width={"40px"} height={"40px"} />
      </div>
      <div className={styles.MobileMenu}>
        {!mobileMenuIsOpen && (
          <button
            className={styles.Button}
            onClick={() => mobileMenuHandler(true)}
          >
            <MenuIcon />
          </button>
        )}

        {mobileMenuIsOpen && (
          <div className={styles.MobileMenuContainer}>
            <div className={styles.CloseBtnContainer}>
              <button
                className={styles.Button}
                onClick={() => mobileMenuHandler(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <ul className={styles.MobileMenuItemsContainer}>
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
                className={`${
                  activePage === "Destination" ? styles.Active : ""
                }`}
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
              <li
                className={`${
                  activePage === "Technology" ? styles.Active : ""
                }`}
              >
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
