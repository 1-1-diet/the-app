import React from "react";
import {
  IonPage,
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonButton,
} from "@ionic/react";
import ptrn from "../../../Images/BACKGROUND 2.svg";
import ptrn2 from "../images/orderBackground.svg";
import styles from "./FinishOrder.module.css";

export default function FinishOrder() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div>
          <img src={ptrn} alt="food ptrn" id={styles.headerptrn} />
          <div className={styles.content}></div>
          <IonGrid>
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
