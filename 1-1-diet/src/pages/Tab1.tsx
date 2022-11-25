import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import "./Tab1.css";
import Header from "../components/Header/HeaderUser";
import HeaderNonUser from "../components/Header/HeaderNonUser";
import Stats from "../components/Stats/Stats";
import Footer from "../components/Footer/Footer";
import kalMeter from "../Images/kalMeter.png";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header />
        <div className="stats-background">
          <IonGrid>
            <Stats />
          </IonGrid>
        </div>
        <IonGrid>
          <IonRow className="ion-justify-content-between ion-padding">
            <div>Tips voor vandaag</div>
            <div>Toon alle</div>
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
