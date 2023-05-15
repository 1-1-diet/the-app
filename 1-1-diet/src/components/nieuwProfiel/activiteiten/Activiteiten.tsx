import { IonButton, IonText, IonIcon } from "@ionic/react";
import React from "react";
import styles from "./Activiteiten.module.css";
import { calendar } from "ionicons/icons";

import { UserProfile } from "../../data";
import { type } from "os";

export default function Activiteiten() {
  const swiperCards = [
    {
      title: "Weeg moment",
      icon: "scale.svg",
      color: "#E4754B",
    },
    {
      title: "Bestellingen",
      icon: "card.svg",
      color: "#5C99D0",
    },
    {
      title: "Favorieten",
      icon: "fav.svg",
      color: "#D7373E",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.swiperCards}>
        {swiperCards?.map((element) => {
          return (
            <div key={element.title} className={styles.topCard}>
              <img
                style={{ backgroundColor: `${element.color}` }}
                id={styles.topCardIcon}
                alt="icon"
                src={require(`../icons/${element.icon}`)}
              />
              <h1 id={styles.topTitle}>{element.title}</h1>
            </div>
          );
        })}
      </div>
      <div className={styles.consulentenContainer}>
        <h1 id={styles.consulentTitle}>Mijn consulent</h1>
        <div className={styles.center}>
          {UserProfile[0].consulenten?.map((element) => {
            return (
              <div key={element.name} className={styles.consulentCardContainer}>
                <div className={styles.dataBox}>
                  <div className={styles.info}>
                    <img
                      src={element.profileImg}
                      alt="profile picture"
                      id={styles.consulentCardProfile}
                    />
                    <div className={styles.consulentDescriptionContainer}>
                      <IonText id={styles.consulentName}>
                        {element.name}
                      </IonText>
                      <div className={styles.locationBox}>
                        <IonIcon
                          icon={element.loctionIcon}
                          className={styles.locationIcon}
                        />
                        <IonText>{element.location}</IonText>
                      </div>
                    </div>
                  </div>

                  <div className={styles.buttonBox}>
                    <IonButton color={"tertiary"}>
                      <IonIcon icon={element.callIcon} />
                    </IonButton>
                    <IonButton>
                      <IonIcon icon={element.mailIcon} />
                    </IonButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.afsprakenContainer}>
        <h1 id={styles.consulentTitle}>Afspraken</h1>
        <div className={styles.afsprakenCenter}>
          {UserProfile[0].meetings?.map((element) => {
            return (
              <div
                key={element.date}
                className={styles.afsprakenCardContainer}
                style={{ backgroundColor: `${element.color}` }}
              >
                <div className={styles.dataBox}>
                  <div className={styles.info}>
                    <div
                      className={styles.afsprakenCardIcon}
                      style={{ backgroundColor: `${element.color2}` }}
                    >
                      <IonText id={styles.afsprakenDateNum}>
                        {element.time}
                      </IonText>
                      <IonText id={styles.afsprakenDateMonth}>uur</IonText>
                    </div>

                    <div className={styles.afsprakenDescriptionContainer}>
                      <IonText id={styles.afsparkenDay}>{element.date}</IonText>
                      <div className={styles.locationBox}>
                        <IonIcon
                          icon={element.loctionIcon}
                          className={styles.locationIcon}
                        />

                        <IonText id={styles.afsparkenlocatie}>
                          {element.place}
                        </IonText>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.buttonBox}>
                  <IonButton>
                    <IonIcon icon={calendar}>Add</IonIcon>
                  </IonButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
