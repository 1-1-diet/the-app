import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import "./Tab1.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import kalMeter from "../Images/kalMeter.png";

const Tab1: React.FC = () => {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    timeOfDay = "morgen";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "middag";
  } else {
    timeOfDay = "avond";
  }

  return (
    <IonPage>
      <IonContent>
        <Header />
        <div className="stats-background">
          <IonGrid>
            <IonRow className="ion-margin">
              <IonCol className="ion-text-center">
                <div>Goeie {timeOfDay}!</div>
              </IonCol>
            </IonRow>
            <IonRow className="ion-margin">
              <IonCol className="ion-text-center">
                <div>Resultaten van deze week</div>
              </IonCol>
            </IonRow>
            <IonRow className="ion-margin">
              <IonCol>
                <div>
                  <p>Wat je bent verloren:</p>
                  <h1>-4kg</h1>
                  <p>Jij bent bij stap:</p>
                  <h1>2</h1>
                </div>
              </IonCol>
              <IonCol className="ion-margin">
                <div className="ion-margin">
                  <img src={kalMeter} alt="kalMeter" />
                </div>
              </IonCol>
            </IonRow>
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
