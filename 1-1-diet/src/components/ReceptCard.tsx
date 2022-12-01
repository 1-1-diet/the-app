import { IonIcon, IonLabel } from "@ionic/react";
import styles from "./ReceptCard.module.css";
import aardbij from "../Images/aardbij.png";
import { heart } from "ionicons/icons";

export const ReceptCard = (recept: any) => {
  return (
    <div className={styles.mainContent}>
      <img alt="Yoghert met aardbij" src={aardbij} className={styles.img} />
      <div className={styles.textContent}>
        <IonLabel className={styles.title}>{recept.title}</IonLabel>
        <div>
          <IonLabel className={styles.subTitle}>{recept.bakeTime}</IonLabel>
          <IonIcon></IonIcon>
        </div>
        <div>
          <IonIcon className={styles.icon} icon={heart} />
          <IonLabel className={styles.subTitle}>{recept.yummies}</IonLabel>
        </div>
      </div>
    </div>
  );
};

export default ReceptCard;
