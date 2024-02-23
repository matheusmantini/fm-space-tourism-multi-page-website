import Logo from "@/icons/logo";
import { useState } from "react";
import DesktopHeader from "./desktop";
import styles from "./header.module.scss";
import MobileHeader from "./mobile";

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const mobileMenuHandler = (newStatus) => {
    setMobileMenuIsOpen(newStatus);
  };

  return (
    <>
      <div className={styles.MenuMobile}>
        <div className={styles.Logo}>
          <Logo width={"40px"} height={"40px"} />
        </div>
        <MobileHeader
          mobileMenuIsOpen={mobileMenuIsOpen}
          mobileMenuHandler={mobileMenuHandler}
        />
      </div>
      <div className={styles.MenuDesktop}>
        <div className={styles.Logo}>
          <Logo width={"50px"} height={"50px"} />
        </div>
        <DesktopHeader />
      </div>
    </>
  );
};

export default Header;
