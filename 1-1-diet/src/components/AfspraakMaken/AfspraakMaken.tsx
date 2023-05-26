import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

export default function ConsulentZoeken(props: any) {
  const history = useHistory();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const push = (path: any) => {
    history.push(path);
  };

  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };

  const required = () => {
    if (date !== "" && time !== "") {
      push("/tabs/succes");
    } else {
      console.log("mag nie");
    }
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
              onIonChange={() => setDate("")}
            />
            <div className={styles.timeContainer}>
              <div className={styles.morningContainer}>
                <h1>Ochtend</h1>
                <div className={styles.timeContent}>
                  <div className={styles.inputContainer}>
                    <input
                      type="checkbox"
                      id="check_1"
                      name="check_1"
                      value="check_1"
                    />
                    <label htmlFor="check_1">9:30</label>
                  </div>
                  <div className={styles.inputContainer}>
                    <input
                      type="checkbox"
                      id="check_2"
                      name="check_1"
                      value="check_2"
                    />
                    <label className="first" htmlFor="check_2">
                      11:00
                    </label>
                  </div>
                  <div className={styles.inputContainer}>
                    <input
                      type="checkbox"
                      id="check_3"
                      name="check_1"
                      value="check_3"
                    />
                    <label htmlFor="check_3">12:00</label>
                  </div>
                </div>
              </div>
              <div className={styles.morningContainer}>
                <h1>Middag</h1>
                <div className={styles.timeContent}>
                  <div className={styles.inputContainer}>
                    <input
                      type="checkbox"
                      id="check_4"
                      name="check_4"
                      value="check_4"
                    />
                    <label htmlFor="check_4">15:00</label>
                  </div>
                  <div className={styles.inputContainer}>
                    <input
                      type="checkbox"
                      id="check_5"
                      name="check_4"
                      value="check_5"
                    />
                    <label className="first" htmlFor="check_5">
                      16:00
                    </label>
                  </div>
                  <div className={styles.inputContainer}>
                    <input
                      type="checkbox"
                      id="check_6"
                      name="check_4"
                      value="check_4"
                    />
                    <label htmlFor="check_6">17:30</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.commentContainer}>
            <div>
              <IonText>Opmerkingen</IonText>
              <IonTextarea />
            </div>
          </div>
          <div className={styles.btnContainer}>
            <IonButton href="/tabs/tab2" color="light">
              Terug
            </IonButton>
            <IonButton
              onClick={() => required()}
              color="secondary"
              type="submit"
            >
              Bevestigen
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
