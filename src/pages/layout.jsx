import { Barlow_Condensed, Bellefair } from "next/font/google";

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
    <main className={`${bellefair.className} ${barlow.className}`}>
      {children}
    </main>
  );
}
