import Header from "@/components/header";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.PageContainer}>
      <Header />
      <article className={styles.MainContent}>
        <div className={styles.TextContent}>
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.BtnContent}>
          <button className={styles.ExploreBtn}>Explore</button>
        </div>
      </article>
    </div>
  );
}
