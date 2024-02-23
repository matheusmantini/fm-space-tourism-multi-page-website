import { usePageContext } from "@/context/pageContext";
import Link from "next/link";
import styles from "./desktopHeader.module.scss";

const DesktopHeader = () => {
  const { activePage, setActivePageHandler } = usePageContext();

  const handleLinkClick = (page) => {
    setActivePageHandler(page);
  };

  return (
    <>
      <div className={styles.Line}></div>
      <nav className={styles.Navigation}>
        <ul>
          <li className={`${activePage === "Home" ? styles.Active : ""}`}>
            <Link
              href={"/"}
              onClick={() => {
                handleLinkClick("Home");
              }}
            >
              Home
            </Link>
          </li>
          <li
            className={`${activePage === "Destination" ? styles.Active : ""}`}
          >
            <Link
              href={"/destination"}
              onClick={() => {
                handleLinkClick("Destination");
              }}
            >
              Destination
            </Link>
          </li>
          <li className={`${activePage === "Crew" ? styles.Active : ""}`}>
            <Link
              href={"/crew"}
              onClick={() => {
                handleLinkClick("Crew");
              }}
            >
              Crew
            </Link>
          </li>
          <li className={`${activePage === "Technology" ? styles.Active : ""}`}>
            <Link
              href={"/technology"}
              onClick={() => {
                handleLinkClick("Technology");
              }}
            >
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DesktopHeader;
