import { IonButton, IonText } from "@ionic/react";
import React from "react";
import styles from "./Activiteiten.module.css";

export default function Activiteiten() {
  const swiperCards = [
    {
      title: "Weeg moment",
      icon: "scale.svg",
      color: "#f57e71",
    },
    {
      title: "Bestellingen",
      icon: "card.svg",
      color: "#ffb167",
    },
    {
      title: "Favorieten",
      icon: "fav.svg",
      color: "#679e97",
    },
  ];

  const consulenten = [
    {
      img: "1to1girls.svg",
      name: "Stella Kane",
      location: "Utrecht",
    },
  ];

  const afspraken = [
    {
      dateNum: "12",
      dateMonth: "Jan",
      day: "Maandag",
      time: "11:00 uur tot 12:00 uur",
      btn: "Sammenvatting",
      color: "#EDF1FA",
      color2: "#D8E3FF",
    },
    {
      dateNum: "13",
      dateMonth: "Jan",
      day: "Dinsdag",
      time: "10:00 uur tot 11:30 uur",
      btn: "Sammenvatting",
      color: "#F9E4EE",
      color2: "#F4CEE0",
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
          {consulenten?.map((element) => {
            return (
              <div key={element.name} className={styles.consulentCardContainer}>
                <img
                  src={require(`../../../Images/${element.img}`)}
                  alt="profile picture"
                  id={styles.consulentCardProfile}
                />
                <div className={styles.consulentDescriptionContainer}>
                  <IonText id={styles.consulentName}>{element.name}</IonText>
                  <IonText>{element.location}</IonText>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.afsprakenContainer}>
        <h1 id={styles.consulentTitle}>Afspraken</h1>
        <div className={styles.afsprakenCenter}>
          {afspraken?.map((element) => {
            return (
              <div
                key={element.dateNum}
                className={styles.afsprakenCardContainer}
                style={{ backgroundColor: `${element.color}` }}
              >
                <div
                  className={styles.afsprakenCardIcon}
                  style={{ backgroundColor: `${element.color2}` }}
                >
                  <IonText id={styles.afsprakenDateNum}>
                    {element.dateNum}
                  </IonText>
                  <IonText id={styles.afsprakenDateMonth}>
                    {element.dateMonth}
                  </IonText>
                </div>
                <div className={styles.afsprakenDescriptionContainer}>
                  <IonText id={styles.afsparkenDay}>{element.day}</IonText>
                  <IonText>{element.time}</IonText>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
