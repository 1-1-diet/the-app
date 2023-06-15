import React from "react";
import {
  IonPage,
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonButton,
  IonInput,
} from "@ionic/react";
import ptrn from "../../../Images/BACKGROUND 2.svg";
import ptrn2 from "../images/orderBackground.svg";
import styles from "./FinishOrder.module.css";
import idealLogo from "../images/ideal-logo-1024 1.png";
import masterCardLogo from "../images/Group 51.png";

export default function FinishOrder() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div>
          <img src={ptrn} alt="food ptrn" id={styles.headerptrn} />
          <div className={styles.content}>
            <IonGrid>
              <div>
                <IonCol>
                  <div>
                    <h1>Bestelling afronden</h1>
                  </div>
                </IonCol>
                <hr
                  style={{
                    background: "lightgrey",
                    color: "lightgrey",
                    borderColor: "lightgrey",
                    height: "3px",
                    width: "95%",
                    opacity: "50%",
                  }}
                />
                <IonCol>
                  <div className={styles.adresContainer}>
                    <h2 className={styles.name}>Luka Marjanovic</h2>
                    <p className={styles.adres}>221b Baker st, Marylebone</p>
                    <p className={styles.adres}>Londen</p>
                    <p className={styles.adres}>United Kingdom</p>
                  </div>
                </IonCol>
                <hr
                  style={{
                    background: "lightgrey",
                    color: "lightgrey",
                    borderColor: "lightgrey",
                    height: "3px",
                    width: "95%",
                    opacity: "50%",
                  }}
                />
                <IonCol>
                  <div className={styles.containers}>
                    <IonRow>
                      <img src={masterCardLogo} alt="mastercard" />
                    </IonRow>
                    <IonRow>
                      <h2 className={styles.pay}>Master Card ending **68</h2>
                    </IonRow>
                  </div>
                </IonCol>
                <hr
                  style={{
                    background: "lightgrey",
                    color: "lightgrey",
                    borderColor: "lightgrey",
                    height: "3px",
                    width: "95%",
                    opacity: "50%",
                  }}
                />
                <IonCol>
                  <div className={styles.containers}>
                    <img src={idealLogo} alt="Ideal" />

                    <h2 className={styles.pay}>Ideal</h2>
                  </div>
                </IonCol>
                <hr
                  style={{
                    background: "lightgrey",
                    color: "lightgrey",
                    borderColor: "lightgrey",
                    height: "3px",
                    width: "95%",
                    opacity: "50%",
                  }}
                />
                <IonCol>
                  <div className={styles.input}>
                    <IonInput
                      aria-label="Outline input"
                      placeholder="Voucher code"
                    ></IonInput>
                  </div>
                </IonCol>
              </div>
            </IonGrid>
          </div>
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
