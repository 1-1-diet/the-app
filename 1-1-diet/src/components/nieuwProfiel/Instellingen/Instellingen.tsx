import {
  IonGrid,
  IonRow,
  IonCol,
  IonToggle,
  IonFooter,
  IonLabel,
  IonIcon,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonToast,
} from "@ionic/react";
import {
  lockClosedOutline,
  notificationsOutline,
  informationCircleOutline,
  logOutOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import styles from "./instellingen.module.css";
import { useState } from "react";

export default function Instellingen() {
  const [showLogout, setShowLogout] = useState(false);
  const toggleShowLogout = () => {
    setShowLogout(!showLogout);
  };

  const [showDel, setShowDel] = useState(false);
  const toggleShowDel = () => {
    setShowDel(!showDel);
  };

  const toggleToast = () => {
    setWachtwoord(true);
  };

  const [notification, setNotification] = useState(false);
  const [wachtwoord, setWachtwoord] = useState(false);

  const settings = [
    {
      icon: lockClosedOutline,
      title: "Wachtwoord wijzigen",
      icon2: chevronForwardOutline,
      click: toggleToast,
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
      click: toggleShowDel,
    },
    {
      icon: logOutOutline,
      title: "Uitloggen",
      icon2: chevronForwardOutline,
      click: toggleShowLogout,
    },
  ];
  return (
    <IonGrid>
      <IonCol>
        {settings?.map((element: any) => {
          return (
            <div
              className={styles.row}
              key={element.title}
              onClick={element.click}
            >
              <IonIcon icon={element.icon} size="large" color="secondary" />
              <IonText className={styles.text}>{element.title}</IonText>
              {element.title !== "Push Notificaties" ? (
                <IonIcon icon={element.icon2} size="large" />
              ) : (
                <IonToggle onIonChange={() => setNotification(true)} />
              )}
            </div>
          );
        })}
        <div
          id={showLogout ? `` : `${styles.hide}`}
          className={styles.backgroundBlur}
        >
          <IonCard>
            <IonCardHeader>
              <IonCardTitle color="danger">Uitloggen</IonCardTitle>
              <IonCardSubtitle>
                Weet je zeker dat je wilt uitloggen?
              </IonCardSubtitle>
            </IonCardHeader>
            <IonButton fill="clear" onClick={() => setShowLogout(false)}>
              Cancel
            </IonButton>
            <IonButton color="danger" fill="clear" href="/">
              Log uit
            </IonButton>
          </IonCard>
        </div>
        <div
          id={showDel ? `` : `${styles.hide}`}
          className={styles.backgroundBlur}
        >
          <IonCard>
            <IonCardHeader>
              <IonCardTitle color="danger">Account verwijderen</IonCardTitle>
              <IonCardSubtitle>Wilt u uw accoutn verwijderen?</IonCardSubtitle>
            </IonCardHeader>
            <IonButton fill="clear" onClick={() => setShowDel(false)}>
              Nee
            </IonButton>
            <IonButton color="danger" fill="clear" href="/">
              Ja, verwijder
            </IonButton>
          </IonCard>
        </div>
      </IonCol>
      <IonToast
        isOpen={notification}
        message="Notificaties kunnen niet aangepast worden"
        duration={5000}
        onDidDismiss={() => setNotification(false)}
        position="top"
      />
      <IonToast
        isOpen={wachtwoord}
        message="Wachtwoord kan niet aangepast worden"
        duration={5000}
        onDidDismiss={() => setWachtwoord(false)}
        position="top"
      />
    </IonGrid>
  );
}
