import React from "react";
import { IonIcon, IonLabel } from "@ionic/react";
import styles from "./quickOptions.module.css";
import { alarmOutline, personOutline, cartOutline } from "ionicons/icons";

export default function quichOptions() {
  const quickOptions = [
    { title: "Jouw consulent", icon: personOutline },
    { title: "Jouw afspraken", icon: alarmOutline },
    { title: "Jouw bestellingen", icon: cartOutline },
  ];

  return (
    <div className={styles.mainContainer}>
      {quickOptions?.map((element: any) => {
        return (
          <div key={element.title} className={styles.btnContainer}>
            <IonLabel>{element.title}</IonLabel>
            <IonIcon icon={element.icon} size="large" />
          </div>
        );
      })}
    </div>
  );
}
