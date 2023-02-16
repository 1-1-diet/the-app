import {
  IonCheckbox,
  IonText,
  IonInput,
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
} from "@ionic/react";
import styles from "./Register.module.css";
import BgPtrn from "../Splashscreen/BgPtrn";
import klap from "../../Images/logo2.svg";

export default function Register() {
  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <img id={styles.klap} src={klap} alt="logo" />

        <div>
          <div>
            <IonItem>
              <IonLabel position="floating">Voor en Achternaam</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Mobiel nummer</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Wachtwoord</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonItem>
          </div>
        </div>
        <div className={styles.extraContent}>
          <div className={styles.stayLogged}>
            <IonCheckbox />
            <IonText>Ingelogd blijven</IonText>
            <IonText>Heb je al een account?</IonText>
            <a>Log in</a>
          </div>
        </div>
        <div>
          <IonButton color="secondary">Volgende</IonButton>
        </div>
      </div>
    </div>
  );
}
