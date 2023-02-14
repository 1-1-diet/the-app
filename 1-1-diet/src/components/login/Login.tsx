import { IonCheckbox, IonText, IonInput, IonButton } from "@ionic/react";
import styles from "./Login.module.css";
import BgPtrn from "../Splashscreen/BgPtrn";
import klap from "../../Images/1to1girls.svg";

export default function SplashScreen() {
  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <img id={styles.klap} src={klap} alt="two girl giving a high 5" />
        <IonText id={styles.title}>Welkom terug</IonText>
        <div className={styles.inputFields}>
          <IonInput className={styles.input} placeholder="Email" />
          <IonInput className={styles.input} placeholder="Wachtwoord" />
        </div>
        <div className={styles.extraContent}>
          <div className={styles.stayLogged}>
            <IonCheckbox />
            <IonText>Ingelogd blijven</IonText>
          </div>
          <IonText>Wachtwoord vergeten?</IonText>
        </div>
        <IonButton>Log in</IonButton>
        <IonText>Nog geen client? Maak nu een account</IonText>
      </div>
    </div>
  );
}
