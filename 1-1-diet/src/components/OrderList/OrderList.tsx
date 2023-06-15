import React from "react";
import {
  IonGrid,
  IonCol,
  IonItem,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonRow,
  IonPage,
  IonContent,
  IonIcon,
} from "@ionic/react";
import { trashBin } from "ionicons/icons";
import styles from "./OrderList.module.css";
import ptrn from "../../Images/BACKGROUND 2.svg";
import soep from "./images/soep.png";
import pannenkoek from "./images/pannenkoek.png";
import Counter from "./Counter";

export default function OrderList() {
  const orders = [
    {
      img: soep,
      product: "Soep",
      price: "7,45 €",
    },
    {
      img: pannenkoek,
      product: "pannenkoek",
      price: "5,95 €",
    },
  ];

  return (
    <IonPage>
      <IonContent fullscreen>
        <img src={ptrn} alt="food ptrn" id={styles.headerptrn} />
        <div className={styles.content}>
          <IonGrid>
            <IonCol>
              <h1>Bestelling details</h1>
            </IonCol>
            <div className={styles.chat}>
              {orders?.map((element: any) => {
                return (
                  <div key={element.product} className={styles.products}>
                    <IonItemSliding>
                      <IonItem>
                        <IonCol size="3">
                          <img
                            className={styles.image}
                            src={element.img}
                            alt=""
                          />
                        </IonCol>
                        <IonCol size="3">
                          <IonRow className={styles.product}>
                            {element.product}
                            <p>{element.weight}</p>
                          </IonRow>
                          <IonRow className={styles.price}>
                            {element.price}
                          </IonRow>
                        </IonCol>
                        <IonCol size="7">
                          <IonRow className="ion-justify-content-evenly">
                            <Counter />
                          </IonRow>
                        </IonCol>
                      </IonItem>
                      <IonItemOptions>
                        <IonItemOption color="primary">
                          <IonIcon slot="icon-only" icon={trashBin}></IonIcon>
                        </IonItemOption>
                      </IonItemOptions>
                    </IonItemSliding>
                  </div>
                );
              })}
            </div>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
}
