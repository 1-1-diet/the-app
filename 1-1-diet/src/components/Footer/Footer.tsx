import React from "react";
import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoPinterest,
  logoYoutube,
} from "ionicons/icons";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonFooter,
  IonLabel,
  IonIcon,
  IonText,
} from "@ionic/react";
import styles from "./Footer.module.css";

export default function Footer() {
  const footer = [
    {
      title: "facebook",
      icon: logoFacebook,
      url: "https://nl-nl.facebook.com",
    },
    {
      title: "twitter",
      icon: logoTwitter,
      url: "https://twitter.com/?lang=nl",
    },
    {
      title: "instagram",
      icon: logoInstagram,
      url: "https://www.instagram.com",
    },
    {
      title: "pinterest",
      icon: logoPinterest,
      url: "https://nl.pinterest.com",
    },
    { title: "youtube", icon: logoYoutube, url: "https://www.youtube.com" },
  ];

  return (
    <IonFooter className={styles.mainContainer}>
      <IonGrid>
        <IonCol>
          <h1 id={styles.title}>Zoek een consultent!</h1>
        </IonCol>
        <IonCol>
          <IonSearchbar
            color="light"
            placeholder="Zoek een postcode of plaats"
          />
        </IonCol>
        <IonCol>
          <IonRow>
            <IonCol>
              <IonCol>
                <h1 id={styles.subtitle}>Join us!</h1>
              </IonCol>
              <IonCol class="ion-align-items-center">
                <div className={styles.container}>
                  {footer?.map((element: any) => {
                    return (
                      <div
                        key={element.title}
                        className={styles.container}
                        onClick={() =>
                          (window.location.href = `${element.url}`)
                        }
                      >
                        <div className={styles.e}>
                          <IonIcon
                            id={styles.icon}
                            icon={element.icon}
                            size="large"
                            color="secondary"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </IonCol>
            </IonCol>
          </IonRow>
        </IonCol>
        <IonRow>
          <IonCol>
            <IonText id={styles.desription}>
              De 1:1 Diet ondersteunt onderzoek aan het Erasmus MC. Patienten
              met diabetes worden in dit onderzoek persoonlijk begeleid door
              dietisten met behulp van een dieet app.
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
}
