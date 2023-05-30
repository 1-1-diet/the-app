import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./AfspraakMaken.module.css";
import {
  IonButton,
  IonContent,
  IonDatetime,
  IonPage,
  IonText,
  IonTextarea,
  IonToast,
} from "@ionic/react";

import highFive from "../../Images/1to1girls.svg";

export default function ConsulentZoeken(props: any) {
  const history = useHistory();
  const [date, setDate] = useState<string | string[]>("");
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
      setIsOpen(true);
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
              value={date}
              onIonChange={(e) => {
                if (!e.detail?.value) {
                  return;
                }
                setDate(e.detail.value);
              }}
            />
            <div className={styles.timeContainer}>
              <div className={styles.morningContainer}>
                <h1>Ochtend</h1>
                <div className={styles.timeContent}>
                  <IonText
                    onClick={() => setTime("9:30")}
                    className={
                      time === "9:30" ? `${styles.after}` : `${styles.before}`
                    }
                  >
                    9:30
                  </IonText>
                  <IonText
                    onClick={() => setTime("11:00")}
                    className={
                      time === "11:00" ? `${styles.after}` : `${styles.before}`
                    }
                  >
                    11:00
                  </IonText>
                  <IonText
                    onClick={() => setTime("12:00")}
                    className={
                      time === "12:00" ? `${styles.after}` : `${styles.before}`
                    }
                  >
                    12:00
                  </IonText>
                </div>
              </div>
              <div className={styles.morningContainer}>
                <h1>Middag</h1>
                <div className={styles.timeContent}>
                  <IonText
                    onClick={() => setTime("15:00")}
                    className={
                      time === "15:00" ? `${styles.after}` : `${styles.before}`
                    }
                  >
                    15:00
                  </IonText>
                  <IonText
                    onClick={() => setTime("16:00")}
                    className={
                      time === "16:00" ? `${styles.after}` : `${styles.before}`
                    }
                  >
                    16:00
                  </IonText>
                  <IonText
                    onClick={() => setTime("17:30")}
                    className={
                      time === "17:30" ? `${styles.after}` : `${styles.before}`
                    }
                  >
                    17:30
                  </IonText>
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
        <IonToast
          isOpen={isOpen}
          message="Er is geen datum of tijd ingevuld."
          duration={5000}
          onDidDismiss={() => setIsOpen(false)}
          position="top"
        ></IonToast>
        ;
      </IonContent>
    </IonPage>
  );
}
