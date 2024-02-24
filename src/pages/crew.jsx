import Header from "@/components/header";
import data from "@/data";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Crew.module.scss";

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState("Douglas Hurley");

  const handleSelectTab = (crewMemberName) => {
    setSelectedCrew(crewMemberName);
  };

  const handleSelectedInfo = (crewMemberName) => {
    return data.crew.filter((member) => {
      return member.name === crewMemberName;
    });
  };

  const selectedData = handleSelectedInfo(selectedCrew)[0];

  return (
    <main className={styles.PageContainer}>
      <Header />
      <div className={styles.PageContent}>
        <p className={styles.Title}>
          <span>02</span>Meet your crew
        </p>
        <div className={styles.ContentWrapper}>
          <div className={styles.ImageContainer}>
            <Image
              src={`/${selectedData?.images?.png}`}
              alt={selectedData?.name}
              width={180}
              height={222}
            />
          </div>
          <div className={styles.TextContent}>
            <div>
              <ul className={styles.CrewSelect}>
                {data.crew.map((member) => {
                  return (
                    <li
                      key={member.name}
                      className={
                        selectedCrew === member.name ? styles.CrewSelect : ""
                      }
                      onClick={() => handleSelectTab(member.name)}
                    >
                      <input
                        type={"radio"}
                        name="crewMembers"
                        value={member.name}
                        checked={selectedCrew === member.name}
                        onChange={() => handleSelectTab(member.name)}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className={styles.Role}>
                <span className={styles.DetailInfo}>{selectedData?.role}</span>
              </p>
              <h2 className={styles.CrewName}>{selectedData?.name}</h2>
              <div className={styles.DescriptionContainer}>
                <p className={styles.Description}>{selectedData?.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
