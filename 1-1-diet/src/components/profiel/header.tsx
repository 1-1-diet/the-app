import React from "react";
import { IonIcon, IonLabel } from "@ionic/react";
import styles from "./header.module.css";
import profileImg from "../../Images/profileImg.jpg";
import ptrn from "../../Images/ptrn.svg";
import { createOutline } from "ionicons/icons";

export default function header(profile: any) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.background}>
        <img className={styles.ptrn} src={ptrn} alt="overlay patroon" />
      </div>
      <div className={styles.profile}>
        <img
          className={styles.profileImg}
          src={profileImg}
          alt="Jouw profiel foto"
        />
        <div id={styles.icon}>
          <IonIcon
            icon={createOutline}
            color="secondary"
            size="large"
          ></IonIcon>
        </div>
        <div className={styles.profileText}>
          <IonLabel id={styles.nameSize}>{profile.name}</IonLabel>
        </div>
      </div>
    </div>
  );
}
