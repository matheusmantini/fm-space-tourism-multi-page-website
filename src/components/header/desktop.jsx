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
          <li className={`${activePage === "Home" ? styles.Active : ""}`}>
            <Link
              href={"/"}
              onClick={() => {
                setActivePageHandler("Home");
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
                setActivePageHandler("Destination");
              }}
            >
              Destination
            </Link>
          </li>
          <li className={`${activePage === "Crew" ? styles.Active : ""}`}>
            <Link
              href={"/crew"}
              onClick={() => {
                setActivePageHandler("Crew");
              }}
            >
              Crew
            </Link>
          </li>
          <li className={`${activePage === "Technology" ? styles.Active : ""}`}>
            <Link
              href={"/technology"}
              onClick={() => {
                setActivePageHandler("Technology");
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
