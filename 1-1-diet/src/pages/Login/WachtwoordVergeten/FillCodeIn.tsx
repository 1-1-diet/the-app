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
import styles from "./FillCodeIn.module.css";
import "../../Tab4/Tab4.css";
import BgPtrn from "../../../components/Splashscreen/BgPtrn";
import klap from "../../../Images/1to1girls.svg";
import { lockClosedOutline, eyeOutline, eyeOffOutline } from "ionicons/icons";

export default function FillCodeIn() {
  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <div className={styles.inputFieldContainer}>
          <div className={styles.top}>
            <img id={styles.klap} src={klap} alt="two girl giving a high 5" />
            <IonText id={styles.title}>Voer de code in van jouw inbox</IonText>
          </div>
          <div className={styles.inputFields}>
            <div className={styles.inputContainer}>
              <IonIcon
                icon={lockClosedOutline}
                size="large"
                color="secondary"
              />
              <IonItem id={styles.input} lines="none">
                <IonInput placeholder="Code" type="password" />
                <IonIcon icon={eyeOutline} size="medium" />
              </IonItem>
            </div>
          </div>
        </div>
        <div className={styles.continueContainer}>
          <IonButton
            id={styles.button}
            color="secondary"
            href={`/login/wachtwoordVergeten/verranderWachtwoord`}
          >
            <IonText id={styles.btnText}>Volgende</IonText>
          </IonButton>
        </div>
      </div>
    </div>
  );
}
