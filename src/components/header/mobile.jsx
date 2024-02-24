import CloseIcon from "@/icons/close";
import MenuIcon from "@/icons/menu";
import Link from "next/link";
import styles from "./mobileHeader.module.scss";

const MobileHeader = ({
  mobileMenuIsOpen,
  mobileMenuHandler,
  activePage,
  setActivePageHandler,
}) => {
  return (
    <>
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
            <li
              className={`${activePage === "Technology" ? styles.Active : ""}`}
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
    </>
  );
};

export default MobileHeader;
