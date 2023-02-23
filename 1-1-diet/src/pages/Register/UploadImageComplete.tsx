import { IonText, IonButton, IonCol, IonGrid, IonImg } from "@ionic/react";

import styles from "./Register.module.css";
import BgPtrn from "../../components/Splashscreen/BgPtrn";
import logo from "../../Images/logo2.svg";
import done from "../../Images/done.svg";

export default function UploadImage() {
  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <img className={styles.klap} id={styles.klap} src={logo} alt="logo" />
        <div>
          <IonGrid>
            <IonCol className={styles.completeContent}>
              <IonImg src={done} alt="check mark" />
              <div className={styles.titleCompleted}>
                <IonText>Je account is klaar!</IonText>
              </div>
            </IonCol>
          </IonGrid>
        </div>
        <div className={styles.button}>
          <IonButton id={styles.button} color="secondary" href={`/tabs/tab1`}>
            Volgende
          </IonButton>
        </div>
      </div>
    </div>
  );
}
