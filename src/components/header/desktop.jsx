import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./desktopHeader.module.scss";

const DesktopHeader = ({ activePage, setActivePageHandler }) => {
  const { pathname } = useRouter();

  const availablePages = ["/", "/crew", "/destination", "/technology"];

  if (availablePages.includes(pathname)) {
    switch (pathname) {
      case "/":
        setActivePageHandler("Home");
        break;
      case "/crew":
        setActivePageHandler("Crew");
        break;
      case "/destination":
        setActivePageHandler("Destination");
        break;
      case "/technology":
        setActivePageHandler("Technology");
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className={styles.Line}></div>
      <nav className={styles.Navigation}>
        <ul>
          <Link
            href={"/"}
            onClick={() => {
              setActivePageHandler("Home");
            }}
          >
            <li className={`${activePage === "Home" ? styles.Active : ""}`}>
              Home
            </li>
          </Link>
          <Link
            href={"/destination"}
            onClick={() => {
              setActivePageHandler("Destination");
            }}
          >
            <li
              className={`${activePage === "Destination" ? styles.Active : ""}`}
            >
              Destination
            </li>
          </Link>
          <Link
            href={"/crew"}
            onClick={() => {
              setActivePageHandler("Crew");
            }}
          >
            <li className={`${activePage === "Crew" ? styles.Active : ""}`}>
              Crew
            </li>
          </Link>
          <Link
            href={"/technology"}
            onClick={() => {
              setActivePageHandler("Technology");
            }}
          >
            <li
              className={`${activePage === "Technology" ? styles.Active : ""}`}
            >
              Technology
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default DesktopHeader;
