import React from "react";
import {
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonIcon,
  IonButton,
} from "@ionic/react";
import style from "./SearchPage.module.css";
import { optionsOutline, cartOutline } from "ionicons/icons";

export default function SearchPage() {
  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol size="10">
            <IonText>
              <h1>Vind jouw favoriete maaltijd!</h1>
            </IonText>
          </IonCol>
          <IonCol className="ion-margin-top">
            <IonIcon icon={cartOutline} size="large" color="primary"></IonIcon>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCol size="10">
            <IonSearchbar></IonSearchbar>
          </IonCol>
          <IonCol size="2">
            <IonButton fill="clear">
              <IonIcon icon={optionsOutline} size="medium" color="secondary" />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
}
