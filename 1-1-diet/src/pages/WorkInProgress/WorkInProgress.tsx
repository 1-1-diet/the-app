import { IonContent, IonImg, IonPage, IonText } from "@ionic/react";
import styles from "./workInProgress.module.css";
import workInProgress from "../../Images/workInProgress.png";

export default function WorkInProgress() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.mainContainer}>
          <IonImg id={styles.img} src={workInProgress} alt="work in progress" />
        </div>
      </IonContent>
    </IonPage>
  );
}
