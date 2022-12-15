import { IonLabel, IonIcon } from "@ionic/react";
import styles from "./WaterTracker.module.css";
import { waterOutline } from "ionicons/icons";

export default function WaterTracker() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <div className={styles.waterWave} />
        <div className={styles.iconContainer}>
          <IonIcon className={styles.icon} icon={waterOutline} />
        </div>
        <div className={styles.textContainer}>
          <IonLabel id={styles.title}>Drink water</IonLabel>
          <IonLabel id={styles.subText}>
            Het was 30 minuten gelden dat jij voor het laast water hbet
            gedronken
          </IonLabel>
        </div>
        <div className={styles.counterContainer}>
          <IonLabel id={styles.counter}>4/10</IonLabel>
          <IonLabel id={styles.glasses}>glazen</IonLabel>
        </div>
      </div>
    </div>
  );
}
