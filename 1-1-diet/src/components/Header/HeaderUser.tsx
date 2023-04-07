import React from "react";
import { IonGrid, IonCol } from "@ionic/react";
import styles from "./Header.module.css";
import ptrn from "../../Images/ptrn.svg";
import logo from "../../Images/logo.svg";

import { UserProfile } from "../data";

const Header: React.FC = () => {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    timeOfDay = "morgen";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "middag";
  } else {
    timeOfDay = "avond";
  }

  return (
    <div className={styles.headerbackground}>
      <img src={ptrn} alt="food ptrn" id={styles.headerptrn} />
      <img src={logo} alt="logo 1 op 1" id={styles.headerlogo} />
      <div className={styles.content}>
        <IonGrid>
          <IonGrid className={styles.titleMargin}>
            <IonCol className={styles.headertitle}>
              <h1>Goeie {timeOfDay}!</h1>
              <h1>{UserProfile[0].name}</h1>
            </IonCol>
          </IonGrid>
        </IonGrid>
      </div>
    </div>
  );
};
export default Header;
