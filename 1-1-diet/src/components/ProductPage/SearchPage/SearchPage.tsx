import React from "react";
import {
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonIcon,
  IonButton,
  IonModal,
  IonContent,
  IonLabel,
  IonCard,
  IonCheckbox,
  IonItem,
} from "@ionic/react";

import styles from "./SearchPage.module.css";
import { optionsOutline, cartOutline } from "ionicons/icons";
import { Filter } from "./Search";
import { Cat } from "../Product";

export default function SearchPage() {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size="10">
            <IonText>
              <h1>Vind jouw favoriete maaltijd!</h1>
            </IonText>
          </IonCol>
          <IonCol className={styles.cart}>
            <IonIcon icon={cartOutline} size="large" color="primary"></IonIcon>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCol size="10">
            <IonSearchbar placeholder="Wat wilt u bestellen?" />
          </IonCol>
          <IonCol size="2">
            <IonButton id="open-modal" expand="block" fill="clear">
              <IonIcon icon={optionsOutline} size="medium" color="secondary" />
            </IonButton>
            <IonModal
              trigger="open-modal"
              initialBreakpoint={0.25}
              breakpoints={[0, 0.25, 0.5, 0.75]}
              handleBehavior="cycle"
            >
              <IonContent className="ion-padding">
                <div className="ion-margin-top">
                  <IonGrid>
                    <IonRow className={styles.filter}>
                      <IonCol>Categorieen:</IonCol>
                      <IonCol>Allergieen:</IonCol>
                    </IonRow>
                    <IonRow>
                      {Filter?.map((element: any) => {
                        return (
                          <IonCol size="6">
                            <IonItem>
                              <IonCheckbox
                                color={element.color}
                                slot="start"
                              ></IonCheckbox>
                              <IonLabel>{element.title}</IonLabel>
                            </IonItem>
                          </IonCol>
                        );
                      })}
                    </IonRow>
                  </IonGrid>
                </div>
              </IonContent>
            </IonModal>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          {Cat?.map((element: any) => {
            return (
              <IonCol size="6">
                <IonCard className={styles.container}>
                  <img
                    alt={element.title}
                    src={require(`../../../Images/${element.img}`)}
                    className={styles.images}
                  />
                  <div className={styles.searchText}>
                    <IonLabel className="ion-margin">{element.title}</IonLabel>
                  </div>
                </IonCard>
              </IonCol>
            );
          })}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
}
