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

function Info() {
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }
  return (
    <div className={styles.cardone}>
      <div className={styles.logoone}></div>
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
            <IonAccordion value="first">
              <IonItem slot="header" color="light">
                <IonLabel>
                  <h2> Het is toch geen crashdieet hè?</h2>
                </IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <p>
                  Nee, alle maaltijdvervangers zijn medisch wetenschappelijk
                  samengesteld. Je loopt tijdens dit dieet geen tekorten op. De
                  vervangers zijn puur ondersteunend en alleen tijdelijk bedoeld
                  om jou het zetje in de goede richting te geven. Als je in stap
                  1 of stap 2 start, kun je de eerste paar dagen een licht
                  hongerig gevoel ervaren. Zodra je vetverbranding op gang komt,
                  zal dit afnemen
                </p>
              </div>
            </IonAccordion>
            <IonAccordion value="second">
              <IonItem slot="header" color="light">
                <IonLabel>
                  <h2>Zijn er bijwerkingen?</h2>
                </IonLabel>
              </IonItem>
              <div className="ion-padding" id="antwoord" slot="content">
                <p>
                  Bij elk dieet kunnen bijwerkingen optreden. De consulent neemt
                  bij het intakegesprek jouw medisch dossier door en kijkt welke
                  stap uit Het Stappenplan het beste bij jou past. Bij twijfel
                  vindt overleg met de huisarts of specialist plaats. Ook jouw
                  persoonlijke geschiedenis en familiegeschiedenis worden hierin
                  betrokken.
                </p>
              </div>
            </IonAccordion>
            <IonAccordion value="third">
              <IonItem slot="header" color="light">
                <IonLabel>
                  <h2>
                    Hebben jullie ook glutenvrije en lactosevrije producten?
                  </h2>
                </IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <p>
                  Ja, afhankelijk van de aard van de intolerantie en/of allergie
                  kun je het dieet ook volgen. Het aantal producten en smaken
                  zijn hierin wel beperkter. Voor meer informatie kijk je onder
                  'Producten'.
                </p>
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonContent>
      </IonModal>
    </div>
  );
}

export default Info;
