import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Tab1.css";
import React from "react";
import { IonContent } from "@ionic/react";
import Invite from "../components/Invite-friend-card/Invite-friend-card";
import Info from "../components/Inforcards/Inforcard";
import Nonusercard from "../components/Non-users-card/Non-users-card";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>1:1 Diet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Invite />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
