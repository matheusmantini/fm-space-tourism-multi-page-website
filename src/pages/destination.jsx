import Header from "@/components/header";
import data from "@/data";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Destination.module.scss";

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState("Moon");

  const handleSelectTab = (destination) => {
    setSelectedDestination(destination);
  };

  const handleSelectedInfo = (destination) => {
    return data.destinations.filter((place) => {
      return place.name === destination;
    });
  };

  const selectedData = handleSelectedInfo(selectedDestination)[0];

  return (
    <main className={styles.PageContainer}>
      <Header />
      <div className={styles.PageContent}>
        <p className={styles.Title}>
          <span>01</span>Pick your destination
        </p>
        <div className={styles.ImageContainer}>
          <Image
            src={`/${selectedData?.images?.png}`}
            alt={selectedData?.name}
            width={259}
            height={259}
          />
        </div>
        <div>
          <ul className={styles.Tab}>
            <li
              className={selectedDestination === "Moon" ? styles.Selected : ""}
              onClick={() => handleSelectTab("Moon")}
            >
              Moon
            </li>
            <li
              className={selectedDestination === "Mars" ? styles.Selected : ""}
              onClick={() => handleSelectTab("Mars")}
            >
              Mars
            </li>
            <li
              className={selectedDestination === "Europa" ? styles.Selected : ""}
              onClick={() => handleSelectTab("Europa")}
            >
              Europa
            </li>
            <li
              className={selectedDestination === "Titan" ? styles.Selected : ""}
              onClick={() => handleSelectTab("Titan")}
            >
              Titan
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles.Name}>{selectedData?.name}</h2>
          <p className={styles.Description}>{selectedData?.description}</p>
          <br />
          <p className={styles.Detail}>
            <span className={styles.DetailTitle}>AVG. DISTANCE </span>
            <span className={styles.DetailInfo}>{selectedData?.distance}</span>
          </p>
          <br />
          <p className={styles.Detail}>
            <span className={styles.DetailTitle}>Est. travel time </span>
            <span className={styles.DetailInfo}>{selectedData?.travel}</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Destination;
