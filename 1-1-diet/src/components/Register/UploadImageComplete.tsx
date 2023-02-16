import { IonCheckbox, IonText, IonInput, IonButton } from "@ionic/react";
import styles from "./Register.module.css";
import BgPtrn from "../Splashscreen/BgPtrn";
import klap from "../../Images/1to1girls.svg";

export default function UploadImageComplete() {
  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <img id={styles.klap} src={klap} alt="two girl giving a high 5" />
        <IonText id={styles.title}>Welkom terug</IonText>
      </div>
    </div>
  );
}
