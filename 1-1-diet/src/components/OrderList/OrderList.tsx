import React, { useState } from "react";
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
  IonButton,
} from "@ionic/react";
import { trashBin, addOutline, removeOutline } from "ionicons/icons";
import styles from "./OrderList.module.css";
import ptrn from "../../Images/BACKGROUND 2.svg";
import soep from "./images/soep.png";
import pannenkoek from "./images/pannenkoek.png";

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

  const [count, setCount] = useState(0);

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div>
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
                              <div className={styles.button}>
                                <IonButton
                                  color="secondary"
                                  onClick={decrement}
                                >
                                  <IonIcon
                                    slot="icon-only"
                                    icon={removeOutline}
                                  />
                                </IonButton>
                                <p className={styles.count}>{count}</p>
                                <IonButton
                                  color="secondary"
                                  onClick={increment}
                                >
                                  <IonIcon slot="icon-only" icon={addOutline} />
                                </IonButton>
                              </div>
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
        </div>
      </IonContent>
    </IonPage>
  );
}
