import { IonIcon, IonLabel } from "@ionic/react";
import styles from "./ReceptCard.module.css";
import aardbij from "../Images/aardbij.png";
import { location, home, person, cart, heart } from "ionicons/icons";

export default function ReceptCard() {
  return (
    <div className={styles.mainContent}>
      <img alt="Yoghert met aardbij" src={aardbij} className={styles.img} />
      <div className={styles.textContent}>
        <IonLabel className={styles.title}>Yoghert met aardbij</IonLabel>
        <div>
          <IonLabel className={styles.subTitle}>5 min bak</IonLabel>
          <IonIcon></IonIcon>
        </div>
        <div>
          <IonIcon className={styles.icon} icon={heart} />
          <IonLabel className={styles.subTitle}>150 Yummies</IonLabel>
        </div>
      </div>
    </div>
  );
}
