import { IonText, IonButton, IonCol, IonGrid } from "@ionic/react";

import styles from "./Register.module.css";
import BgPtrn from "../Splashscreen/BgPtrn";
import logo from "../../Images/logo2.svg";

export default function UploadImage() {
  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <img className={styles.klap} id={styles.klap} src={logo} alt="logo" />
        <div>
          <IonGrid>
            <IonCol>
              <div className={styles.titleCompleted}>
                <IonText>Je account is klaar!</IonText>
              </div>
            </IonCol>
          </IonGrid>
        </div>
        <div className={styles.button}>
          <IonButton className={styles.butt} color="secondary">
            Volgende
          </IonButton>
        </div>
      </div>
    </div>
  );
}
