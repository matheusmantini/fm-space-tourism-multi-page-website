import Header from "@/components/header";
import data from "@/data";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Technology.module.scss";

const Technology = () => {
  const [selectedTech, setSelectedTech] = useState("Launch vehicle");

  const handleSelectTab = (techName) => {
    setSelectedTech(techName);
  };

  const handleSelectedInfo = (techName) => {
    return data.technology.filter((tech) => {
      return tech.name === techName;
    });
  };

  const selectedData = handleSelectedInfo(selectedTech)[0];

  return (
    <main className={styles.PageContainer}>
      <Header />
      <p className={styles.Title}>
        <span>03</span>Space Launch 101
      </p>
      <div className={styles.ImageContainer}>
        <Image
          src={`/${selectedData?.images?.landscape}`}
          alt={selectedData?.name}
          width={180}
          height={222}
        />
      </div>
      <div className={styles.PageContent}>
        <ul className={styles.TechSelect}>
          {data.technology.map((tech, index) => {
            return (
              <li
                key={tech.name}
                className={selectedTech === tech.name && styles.Selected}
                onClick={() => handleSelectTab(tech.name)}
              >
                <input
                  type={"radio"}
                  name="techMembers"
                  value={tech.name}
                  checked={selectedTech === tech.name}
                  data-counter={index + 1}
                />
              </li>
            );
          })}
        </ul>
        <div>
          <p className={styles.Subtitle}>The terminology...</p>
          <h2 className={styles.TechName}>{selectedData?.name}</h2>
          <p className={styles.Description}>{selectedData?.description}</p>
        </div>
      </div>
    </main>
  );
};

export default Technology;
