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
  IonContent,
} from "@ionic/react";
import map from "./map.svg";
import { optionsOutline, location } from "ionicons/icons";

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
                <div>
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
                <div>
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

      <IonButton
        id="open-modal"
        expand="block"
        className={styles.markerContainer}
        style={{ top: "10em", left: "10em" }}
      >
        <IonIcon icon={location} size="large" />
      </IonButton>
      <IonModal
        trigger="open-modal"
        initialBreakpoint={0.25}
        breakpoints={[0, 0.25, 0.5, 0.75]}
        handleBehavior="cycle"
      >
        <IonContent className="ion-padding">
          <div className="ion-margin-top">
            <IonLabel>
              Click the handle above to advance to the next breakpoint.
            </IonLabel>
          </div>
        </IonContent>
      </IonModal>
    </div>
  );
}
