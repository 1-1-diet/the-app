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
  IonCard
} from "@ionic/react";

import styles from "./SearchPage.module.css";
import { optionsOutline, cartOutline } from "ionicons/icons";
import { Search } from "./Search"

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
                  <IonLabel>
                    Click the handle above to advance to the enxt breakpoint.
                  </IonLabel>
                </div>
              </IonContent>
            </IonModal>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
      <IonRow>
          {Search?.map((element: any) => {
            return (
              <IonCol size="6">
                <IonCard>
                  <img
                    alt={element.title}
                    src={require(`../../Images/${element.img}`)}
                    className={styles.images}
                  />
                  <div >
                    <IonLabel >
                      {element.title}{" "}
                    </IonLabel>
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
