import React from "react";
import { IonGrid, IonCol, IonText } from "@ionic/react";
import styles from "./Header.module.css";
import ptrn from "../../../Images/ptrn.svg";
import logo from "../../../Images/logo.svg";
import profile from "../../../Images/profileImg.jpg";
import change from "../icons/change.svg";

import { UserProfile } from "../../data";

export default function Header() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerbackground}>
        <img src={ptrn} alt="food ptrn" id={styles.headerptrn} />
        <img src={logo} alt="logo 1 op 1" id={styles.headerlogo} />
        <div className={styles.absolute}>
          <div className={styles.imgContainer}>
            <img
              id={styles.img}
              src={UserProfile[0].profileImg}
              alt="profile image"
            />
            <img src={change} alt="change icon" style={{ width: "1.8em" }} />
          </div>
          <div className={styles.profileInfo}>
            <h1 id={styles.name}>{UserProfile[0].name}</h1>
            <div className={styles.userSinds}>
              <IonText id={styles.userSinds}>
                gebruiker sinds {UserProfile[0].useTime}
              </IonText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
