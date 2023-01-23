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
  
} from "@ionic/react";

import styles from "./SearchPage.module.css";
import { optionsOutline, cartOutline } from "ionicons/icons";

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
                <IonCol>
                    <div className={styles.vleesnvis}>

                    </div>
                </IonCol>
                <IonCol>
                    2
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    1
                </IonCol>
                <IonCol>
                    2
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonContent>    
  );
}
