import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonTitle,
  IonButton,
  IonHeader,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import Header from "../components/Header/HeaderUser";
import HeaderNonUser from "../components/Header/HeaderNonUser";
import Stats from "../components/Stats/Stats";
import Footer from "../components/Footer/Footer";
import Invite from "../components/Invite-friend-card/Invite-friend-card";
import Info from "../components/Inforcards/Inforcard";
import Nonusercard from "../components/Non-users-card/Non-users-card";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header />
        <IonGrid className="stats-background">
          <Stats />
        </IonGrid>
        <IonGrid>
          <IonRow className="ion-justify-content-between ion-padding">
            <p>Tips voor vandaag</p>
            <p>Toon alle</p>
          </IonRow>
          <IonRow className="ion-justify-content-between">
            <IonButton>Ontbijt</IonButton>
            <IonButton>lunch</IonButton>
            <IonButton>diner</IonButton>
            <IonButton>snack</IonButton>
          </IonRow>
        </IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
