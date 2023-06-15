import React from "react";
import {
  IonPage,
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonButton,
  IonInput,
  IonIcon,
  IonText,
} from "@ionic/react";
import ptrn from "../../../Images/BACKGROUND 2.svg";
import ptrn2 from "../images/orderBackground.svg";
import styles from "./FinishOrder.module.css";
import idealLogo from "../images/ideal-logo-1024 1.png";
import masterCardLogo from "../images/Group 51.png";
import { chevronBackOutline } from "ionicons/icons";

export default function FinishOrder() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div>
          <img src={ptrn} alt="food ptrn" id={styles.headerptrn} />
          <IonIcon
            icon={chevronBackOutline}
            color="navigation"
            size="large"
            className={styles.navBtn}
          />
          <div className={styles.content}>
            <IonGrid>
              <IonCol>
                <div>
                  <h1>Bestelling afronden</h1>
                </div>
              </IonCol>
              <hr />
              <IonCol>
                <div className={styles.adresContainer}>
                  <h2 className={styles.name}>Luka Marjanovic</h2>
                  <p className={styles.adres}>221b Baker st, Marylebone</p>
                  <p className={styles.adres}>Londen</p>
                  <p className={styles.adres}>United Kingdom</p>
                </div>
              </IonCol>
              <hr />
              <IonCol>
                <div className={styles.containers}>
                  <img
                    className={styles.img}
                    src={masterCardLogo}
                    alt="mastercard"
                  />
                  <h2 className={styles.pay}>Master Card *** 68</h2>
                </div>
              </IonCol>
              <hr />
              <IonCol>
                <div className={styles.containers}>
                  <img className={styles.img} src={idealLogo} alt="Ideal" />
                  <h2 className={styles.pay}>Ideal</h2>
                </div>
              </IonCol>
              <hr />
              <IonCol>
                <div className={styles.input}>
                  <IonInput
                    aria-label="Outline input"
                    placeholder="Voucher code"
                  ></IonInput>
                </div>
              </IonCol>
            </IonGrid>
          </div>
          <IonGrid className={styles.endContainer}>
            <div className={styles.orders}>
              <img src={ptrn2} alt="food ptrn" id={styles.headerptrn2} />
              <IonCol>
                <IonRow className="ion-justify-content-evenly">
                  <IonCol>
                    <p>Totaal</p>
                    <p>Verzendkosten</p>
                    <p>Korting</p>
                    <p>Totale bedrag</p>
                  </IonCol>
                  <IonCol className="ion-text-end">
                    <p></p>
                    <p> €</p>
                    <p> €</p>
                    <p>€</p>
                  </IonCol>
                </IonRow>
                <IonCol>
                  <IonButton className={styles.orderConfirm} color="white-blue">
                    Bestelling afronden
                  </IonButton>
                </IonCol>
              </IonCol>
            </div>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
}
