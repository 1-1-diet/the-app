import React from "react";
import {
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonIcon,
} from "@ionic/react";
import style from "./SearchPage.module.css";
import { optionsOutline } from "ionicons/icons";

export default function SearchPage() {
  return (
    <div>
      <IonText>Vind jouw favoriete maaltijd!</IonText>
      <IonGrid>
        <IonRow>
          <IonCol size="10">
            <IonSearchbar></IonSearchbar>
          </IonCol>
          <IonCol size="2">
            <button>
              <IonIcon icon={optionsOutline} />
            </button>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
}
