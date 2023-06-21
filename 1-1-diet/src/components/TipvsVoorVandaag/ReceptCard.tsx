import { IonIcon, IonLabel, IonRouterLink } from "@ionic/react";
import styles from "./ReceptCard.module.css";
import { heart } from "ionicons/icons";

export const ReceptCard = (recept: any) => {
  return (
    <div className={styles.mainContent}>
      <IonRouterLink href="/tabs/Recept">
        <img
          alt="Yoghert met aardbij"
          src={require(`../../Images/${recept.img}`)}
          className={styles.img}
        />
        <div className={styles.textContent}>
          <h1 className={styles.title}>{recept.title}</h1>
          <div>
            <IonLabel className={styles.subTitle}>{recept.bakeTime}</IonLabel>
            <IonIcon></IonIcon>
          </div>
          <div>
            <IonIcon className={styles.icon} icon={heart} />
            <IonLabel className={styles.subTitle}>{recept.yummies}</IonLabel>
          </div>
        </div>
      </IonRouterLink>
    </div>
  );
};

export default ReceptCard;
