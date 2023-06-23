import React from "react";
import {
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonText,
  IonRouterLink,
  IonPage,
  IonContent,
} from "@ionic/react";
import { stopwatchOutline, heart, chevronBackOutline } from "ionicons/icons";
import styles from "./ReceptAll.module.css";
import { Recepten } from "../data";
import BackButton from "../../BackButton";

export default function ReceptAll() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <BackButton />
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Recepten</h1>
        </div>
        <div className={styles.Container}>
          {Recepten?.map((recept) => {
            return (
              <IonRouterLink
                className={styles.unset}
                href={`/tabs/tab1/recept/${recept.id}`}
              >
                <div>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="4">
                        <img
                          className={styles.image}
                          src={recept.image}
                          alt=""
                        />
                      </IonCol>
                      <IonCol size="7">
                        <div>
                          <h1 id={styles.title}>{recept.title}</h1>
                        </div>
                        <div>
                          <IonRow>
                            <IonCol>
                              <p>{recept.bakeTime}</p>
                            </IonCol>
                            <IonCol>
                              <IonIcon
                                className={styles.icon}
                                icon={stopwatchOutline}
                              />
                            </IonCol>
                          </IonRow>
                          <IonRow>
                            <IonCol>
                              <p>{recept.yummies}</p>
                            </IonCol>
                            <IonCol>
                              <IonIcon
                                color="danger"
                                className={styles.icon}
                                icon={heart}
                              />
                            </IonCol>
                          </IonRow>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                  <hr />
                </div>
              </IonRouterLink>
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
}
