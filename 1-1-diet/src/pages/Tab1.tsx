import { IonContent, IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import "./Tab1.css";
import Header from "../components/Header/HeaderUser";
import HeaderNonUser from "../components/Header/HeaderNonUser";
import Footer from "../components/Footer/Footer";
import kalMeter from "../Images/kalMeter.png";
import TipsVoorVandaag from "../components/TipsVoorVandaag";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header />
        <div className="stats-background">
          <IonGrid>
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
        <TipsVoorVandaag />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
