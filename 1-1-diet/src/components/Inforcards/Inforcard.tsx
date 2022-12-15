import React, { useRef } from "react";
import {
  createAnimation,
  IonButtons,
  IonButton,
  IonModal,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonHeader,
  IonText,
  IonImg,
  IonAccordion,
  IonAccordionGroup,
  IonPage,
} from "@ionic/react";
import styles from "./Infocard.module.css";
import {} from "@ionic/react";
import { info } from "console";
import { Vragen } from "./vragen";

export const Info = (vragen: any) => {
  const modal = useRef<HTMLIonModalElement>(null);
  function dismiss() {
    modal.current?.dismiss();
  }
  return (
    <div className={styles.cardone}>
      <div className={styles.logoone} />
      <div className={styles.textbox}>
        <IonText>
          <h5 className={styles.cardonetext}>
            Heb Jij nog vragen, lees nog de meeste gestelde vragen
          </h5>
        </IonText>
        <IonButton id="open-modal" expand="block">
          Lees meer
        </IonButton>
      </div>

      <IonModal id="example-modal" ref={modal} trigger="open-modal">
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Meeste gestelde vragen</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()}>Terug</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonImg src="https://www.one2onediet-westafrica.com/getmedia/Yoga-Lady-and-Consultant-on-sofa-320x320.png" />
          <IonAccordionGroup>
            {Vragen?.map((vragen: any) => {
              return (
                <IonAccordion value={vragen.title} key={vragen.title}>
                  <IonItem slot="header" color="light">
                    <IonLabel>
                      <h2>{vragen.title}</h2>
                    </IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    <p>{vragen.antwoord}</p>
                  </div>
                </IonAccordion>
              );
            })}
          </IonAccordionGroup>
        </IonContent>
      </IonModal>
    </div>
  );
};

export default Info;
