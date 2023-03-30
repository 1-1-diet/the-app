import React from "react";
import { IonGrid, IonCol, IonText } from "@ionic/react";
import styles from "./Header.module.css";
import ptrn from "../../../Images/ptrn.svg";
import logo from "../../../Images/logo.svg";
import profile from "../../../Images/profileImg.jpg";
import change from "../icons/change.svg";

export default function Header() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerbackground}>
        <img src={ptrn} alt="food ptrn" id={styles.headerptrn} />
        <img src={logo} alt="logo 1 op 1" id={styles.headerlogo} />
        <div className={styles.absolute}>
          <img id={styles.img} src={profile} alt="profile image" />
          <div className={styles.profileInfo}>
            <IonText id={styles.name}>Sybren Huisman</IonText>
            <div className={styles.userSinds}>
              <IonText id={styles.userSinds}>gebruiker sinds 3 maanden</IonText>
              <img src={change} alt="change icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
