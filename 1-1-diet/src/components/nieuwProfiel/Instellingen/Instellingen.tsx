import {
  IonGrid,
  IonRow,
  IonCol,
  IonToggle,
  IonFooter,
  IonLabel,
  IonIcon,
  IonText,
} from "@ionic/react";
import {
  lockClosedOutline,
  notificationsOutline,
  informationCircleOutline,
  logOutOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import styles from "./instellingen.module.css";

export default function Instellingen() {
  const settings = [
    {
      icon: lockClosedOutline,
      title: "Wachtwoord wijzigen",
      icon2: chevronForwardOutline,
    },
    {
      icon: notificationsOutline,
      title: "Push Notificaties",
      icon2: chevronForwardOutline,
    },
    {
      icon: informationCircleOutline,
      title: "Account verwijderen",
      icon2: chevronForwardOutline,
    },
    {
      icon: logOutOutline,
      title: "Uitloggen",
      icon2: chevronForwardOutline,
    },
  ];

  return (
    <IonGrid>
      <IonCol>
        {settings?.map((element: any) => {
          return (
            <div className={styles.row} key={element.title}>
              <IonIcon icon={element.icon} size="large" color="secondary" />
              <IonText className={styles.text}>{element.title}</IonText>
              {element.title !== "Push Notificaties" ? (
                <IonIcon icon={element.icon2} size="large" />
              ) : (
                <IonToggle />
              )}
            </div>
          );
        })}
      </IonCol>
    </IonGrid>
  );
}
