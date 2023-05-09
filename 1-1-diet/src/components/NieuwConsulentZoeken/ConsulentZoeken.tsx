import React from "react";
import styles from "./ConsulentZoeken.module.css";
import "../../pages/Tab2/Tab2";
import {
  IonInput,
  IonButton,
  IonPopover,
  IonIcon,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonModal,
  IonText,
} from "@ionic/react";
import map from "./map.svg";
import {
  optionsOutline,
  location,
  chatboxEllipsesOutline,
} from "ionicons/icons";
import profile1 from "../../Images/consulentProfile.svg";
import profile2 from "../../Images/profileImg2.svg";

export default function ConsulentZoeken() {
  const filter = [
    {
      geslacht: [
        {
          title: "Man",
          value: "man",
        },
        {
          title: "Vrouw",
          value: "vrouw",
        },
        {
          title: "Allebij",
          value: "man-vrouw",
        },
      ],
      specialisatie: [
        {
          title: "Onwards coach",
          value: "onwardsCoach",
        },
        {
          title: "Online coach",
          value: "onlineCoach",
        },
        {
          title: "Allebij",
          value: "onwardsCoach-onlineCoach",
        },
      ],
    },
  ];

  const markers = [
    {
      top: "10em",
      left: "10em",
      trigger: "test1",
      title: "Zoek consulent",
      image: profile1,
      name: "Karin Egberink",
      time: "9:00 tot 17:00",
      address: "122 Ballymacash Rd, Lisburn BT28 3EZ",
      distance: "25 km",
      phone: "028 92 662853",
      mail: "consulent@mail.com",
    },
    {
      top: "20em",
      left: "20em",
      trigger: "test2",
      title: "Zoek consulent",
      image: profile2,
      name: "Reinate Roelofsen",
      time: "9:00 tot 17:00",
      address: "122 Ballymacash Rd, Lisburn BT28 3EZ",
      distance: "25 km",
      phone: "028 92 662853",
      mail: "consulent@mail.com",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <img alt="map" src={map} id={styles.imgMap} />
      <div className={styles.inputContainer}>
        <IonInput placeholder="Jouw locatie" className={styles.input} />
        <div className={styles.searchBtn}>Zoeken</div>
      </div>
      <IonButton
        color="secondary"
        shape="round"
        className={styles.filterBtn}
        id="click-trigger"
      >
        <IonIcon className={styles.icon} icon={optionsOutline} />
      </IonButton>
      <IonPopover
        trigger="click-trigger"
        side="bottom"
        alignment="center"
        triggerAction="click"
      >
        <div className={styles.filterContainer}>
          <IonRadioGroup className={styles.filterContent} value="man-vrouw">
            <IonLabel>Geslacht</IonLabel>
            {filter[0].geslacht?.map((element) => {
              return (
                <div key={element.title}>
                  <div className={styles.textContainer}>
                    <IonRadio value={element.value}></IonRadio>
                    <IonLabel>{element.title}</IonLabel>
                  </div>
                </div>
              );
            })}
          </IonRadioGroup>
          <IonRadioGroup
            className={styles.filterContent}
            value="onwardsCoach-onlineCoach"
          >
            <IonLabel>Specialisatie</IonLabel>
            {filter[0].specialisatie?.map((element) => {
              return (
                <div key={element.title}>
                  <div className={styles.textContainer}>
                    <IonRadio value={element.value}></IonRadio>
                    <IonLabel>{element.title}</IonLabel>
                  </div>
                </div>
              );
            })}
          </IonRadioGroup>
        </div>
      </IonPopover>
      {markers?.map((element) => {
        return (
          <div key={element.top} className={styles.mainContent}>
            <IonButton
              id={element.trigger}
              expand="block"
              className={styles.markerContainer}
              style={{ top: `${element.top}`, left: `${element.left}` }}
            >
              <IonIcon icon={location} size="large" />
            </IonButton>
            <IonModal
              trigger={element.trigger}
              initialBreakpoint={0.35}
              breakpoints={[0, 0.35, 0.7]}
              handleBehavior="cycle"
            >
              <div className={styles.mainPopupContainer}>
                <h1 id={styles.title}>{element.name}</h1>
                <div className={styles.consulentContainer}>
                  <img
                    src={element.image}
                    alt="consulent profiel foto"
                    id={styles.profileImg}
                  />
                  <div className={styles.consulentInfo}>
                    <IonText>{element.name}</IonText>
                    <IonText id={styles.distance}>
                      {element.distance} van je locatie
                    </IonText>
                  </div>
                </div>
                <div className={styles.bottomContainer}>
                  <IonButton color={"white"} id={styles.afspraak}>
                    Afspraak maken
                  </IonButton>
                  <IonButton color={"secondary"} id={styles.moreInfo}>
                    <IonIcon icon={chatboxEllipsesOutline} size="large" />
                  </IonButton>
                </div>
                <div className={styles.aboutMe}>
                  <h1 id={styles.secondTitle}>Over mij:</h1>
                  <IonText>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cupiditate earum nemo impedit iusto aliquid ipsam hic
                    repudiandae incidunt facilis necessitatibus quidem, enim
                    vitae, distinctio nulla nesciunt. Totam ratione itaque ad!
                  </IonText>
                </div>
                <div className={styles.openTime}>
                  <h1 id={styles.secondTitle}>Openingstijden:</h1>
                  <IonText>Maandag tot Vrijdag: {element.time}</IonText>
                </div>
              </div>
            </IonModal>
          </div>
        );
      })}
    </div>
  );
}
