import React from "react";
import styles from "./AfspraakMaken.module.css";
import {
  IonButton,
  IonContent,
  IonDatetime,
  IonPage,
  IonText,
  IonTextarea,
} from "@ionic/react";

import highFive from "../../Images/1to1girls.svg";

export default function ConsulentZoeken() {
  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.mainContainer}>
          <div className={styles.headerContainer}>
            <IonText>Welkom</IonText>
            <img src={highFive} alt="1 op 1 high five" />
          </div>
          <div className={styles.datePickContainer}>
            <IonDatetime
              isDateEnabled={isWeekday}
              locale="nl-NL"
              presentation="date"
            />
            <IonDatetime locale="nl-NL" presentation="time" />
          </div>
          <div className={styles.commentContainer}>
            <div>
              <IonText>Opmerkingen</IonText>
              <IonTextarea />
            </div>
          </div>
          <div className={styles.btnContainer}>
            <IonButton color="light">Terug</IonButton>
            <IonButton color="secondary">Bevestigen</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
