import { PageProvider } from "@/context/pageContext";
import { Barlow_Condensed, Bellefair } from "next/font/google";
import styles from "../styles/Layout.module.scss";

export const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bellefair",
});

export const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow",
});

export default function Layout({ children }) {
  return (
    <PageProvider>
      <main
        className={`${styles.MainContainer} ${bellefair.className} ${barlow.className}`}
      >
        {children}
      </main>
    </PageProvider>
  );
}
