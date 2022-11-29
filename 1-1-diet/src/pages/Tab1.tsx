import {
  IonButton,
  IonCard,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import React from "react";
import { IonSlides, IonSlide, IonContent } from "@ionic/react";
import Invite from "../components/Invite-friend-card/Invite-friend-card";
import Inforcard from "../components/Inforcards/Inforcard";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>1:1 Diet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Inforcard />
        <Invite />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
