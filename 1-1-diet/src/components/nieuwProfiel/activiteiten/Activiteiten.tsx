import { IonButton, IonText, IonIcon, IonToast } from "@ionic/react";
import React, { useState } from "react";
import styles from "./Activiteiten.module.css";
import { calendar } from "ionicons/icons";

import { UserProfile } from "../../data";
import { type } from "os";

export default function Activiteiten() {
  const [agenda, setAgenda] = useState(false);
  const [weegMoment, setWeegMoment] = useState(false);
  const [bestelling, setBestelling] = useState(false);
  const [favo, setFavo] = useState(false);

  const swiperCards = [
    {
      title: "Weeg moment",
      icon: "scale.svg",
      color: "#E4754B",
      click: () => setWeegMoment(true),
    },
    {
      title: "Bestellingen",
      icon: "card.svg",
      color: "#5C99D0",
      click: () => setBestelling(true),
    },
    {
      title: "Favorieten",
      icon: "fav.svg",
      color: "#D7373E",
      click: () => setFavo(true),
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.swiperCards}>
        {swiperCards?.map((element) => {
          return (
            <div
              key={element.title}
              className={styles.topCard}
              onClick={element.click}
            >
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
                    <IonButton href="/tabs/call" color={"tertiary"}>
                      <IonIcon icon={element.callIcon} />
                    </IonButton>
                    <IonButton href="/tabs/chat">
                      <IonIcon icon={element.chatIcon} />
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
                  <IonButton onClick={() => setAgenda(true)}>
                    <IonIcon icon={calendar}>Add</IonIcon>
                  </IonButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <IonToast
        isOpen={agenda}
        message="Koppelen aan agenda staat niet aan"
        duration={5000}
        onDidDismiss={() => setAgenda(false)}
        position="top"
      />
      <IonToast
        isOpen={weegMoment}
        message="Er zijn nog geen weeg momenten"
        duration={5000}
        onDidDismiss={() => setWeegMoment(false)}
        position="top"
      />
      <IonToast
        isOpen={bestelling}
        message="Er zijn nog geen bestellingen"
        duration={5000}
        onDidDismiss={() => setBestelling(false)}
        position="top"
      />
      <IonToast
        isOpen={favo}
        message="Er zijn nog geen favorieten"
        duration={5000}
        onDidDismiss={() => setFavo(false)}
        position="top"
      />
    </div>
  );
}
