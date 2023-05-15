import React from "react";
import {
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonIcon,
  IonRouterLink,
  IonPage,
  IonContent,
} from "@ionic/react";
import { volumeMediumOutline, close } from "ionicons/icons";
import patern from "../../Images/Pattern.png";
import profile from "./images/Photo Profile call.svg";
import styles from "./call.module.css";

export default function Call() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div>
          <img className={styles.gradient} src={patern} alt="image not found" />
        </div>
        <div>
          <IonGrid>
            <IonCol className={styles.profile}>
              <IonRow className="ion-justify-content-center">
                <img
                  className={styles.profileImage}
                  src={profile}
                  alt="Image not found"
                />
              </IonRow>
            </IonCol>
            <IonCol className={styles.info}>
              <IonCol className="ion-text-center">
                <h1>Stefan de Jong</h1>
              </IonCol>
              <IonCol className="ion-text-center">
                <p className={styles.bottomText}>
                  Je bent al 5:39 minuten in gesprek
                </p>
              </IonCol>
            </IonCol>
            <IonCol className={styles.buttons}>
              <IonRow>
                <div className={styles.button1}>
                  <IonIcon
                    slot="icon-only"
                    size="large"
                    icon={volumeMediumOutline}
                  />
                </div>
                <IonRouterLink href="/tabs/chat" style={{ zIndex: "100" }}>
                  <div className={styles.button2}>
                    <IonIcon
                      slot="icon-only"
                      size="large"
                      color="light"
                      icon={close}
                    />
                  </div>
                </IonRouterLink>
              </IonRow>
            </IonCol>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
}
