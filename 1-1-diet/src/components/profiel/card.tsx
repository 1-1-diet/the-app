import React from "react";
import styles from "./card.module.css";
import { IonIcon, IonLabel } from "@ionic/react";
import {
  scaleOutline,
  documentOutline,
  settingsOutline,
  lockClosedOutline,
  logOutOutline,
} from "ionicons/icons";

export default function card() {
  const card = [
    { title: "Weeg je zelf", icon: scaleOutline },
    { title: "Weizig Pif formulier", icon: documentOutline },
    { title: "Settings", icon: settingsOutline },
    { title: "Wachtwoord weizigen", icon: lockClosedOutline },
    { title: "Uitloggen", icon: logOutOutline },
  ];

  return (
    <div className={styles.mainContent}>
      {card?.map((element: any) => {
        return (
          <div key={element.title} className={styles.cardContainer}>
            <div className={styles.cardContent}>
              <IonLabel id={styles.title}>{element.title}</IonLabel>
              <IonIcon icon={element.icon} size="large" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
