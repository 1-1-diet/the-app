import React from "react";
import styles from "./Recept.module.css";
import { IonContent, IonPage } from "@ionic/react";
import { Recepten } from "../data";

export default function Recept() {
  return (
    <IonPage>
      <IonContent fullscreen>
        {Recepten?.map((recept) => {
          return (
            <div className={styles.mainContainer}>
              <div className={styles.headerContainer}>
                <img src="" alt="image" />
                <div>
                  {recept.title}
                  <div>` 1` 121` 12`543 ` ` ` ` </div>
                </div>
              </div>
              <div className={styles.mainContent}></div>
              <div className={styles.ingridientContainer}></div>
              <div className={styles.extraContainer}></div>
            </div>
          );
        })}
      </IonContent>
    </IonPage>
  );
}
