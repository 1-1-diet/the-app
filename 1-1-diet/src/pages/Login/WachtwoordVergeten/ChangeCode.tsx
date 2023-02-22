import React, { useState } from "react";
import {
  IonCheckbox,
  IonText,
  IonInput,
  IonButton,
  IonIcon,
  IonNote,
  IonItem,
} from "@ionic/react";
import BgPtrn from "../../../components/Splashscreen/BgPtrn";
import klap from "../../../Images/1to1girls.svg";
import { lockClosedOutline, eyeOutline, eyeOffOutline } from "ionicons/icons";
import styles from "./ChangeCode.module.css";
import "../../Tab4/Tab4.css";

export default function ChangeCode() {
  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <div className={styles.inputFieldContainer}>
          <div className={styles.top}>
            <img id={styles.klap} src={klap} alt="two girl giving a high 5" />
            <IonText id={styles.title}>Verrander jouw code</IonText>
          </div>
          <div className={styles.inputFields}>
            <div className={styles.inputContainer}>
              <IonIcon
                icon={lockClosedOutline}
                size="large"
                color="secondary"
              />
              <IonItem id={styles.input} lines="none">
                <IonInput placeholder="Wachtwoord" type="password" />
                <IonIcon icon={eyeOutline} size="medium" />
              </IonItem>
            </div>
            <div className={styles.inputContainer}>
              <IonIcon
                icon={lockClosedOutline}
                size="large"
                color="secondary"
              />
              <IonItem id={styles.input} lines="none">
                <IonInput placeholder="Herhaal wachtwoord" type="password" />
                <IonIcon icon={eyeOutline} size="medium" />
              </IonItem>
            </div>
          </div>
        </div>
        <div className={styles.continueContainer}>
          <IonButton id={styles.button} color="secondary" href={`/tabs/tab1`}>
            <IonText id={styles.btnText}>Log in</IonText>
          </IonButton>
        </div>
      </div>
    </div>
  );
}
