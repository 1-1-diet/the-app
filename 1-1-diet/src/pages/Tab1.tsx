import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import kalMeter from '../Images/kalMeter.png'
import headerbackground from '../Images/headerbackground.png'

const Tab1: React.FC = () => {
  return (
    <IonPage >
      <IonHeader >
        <IonToolbar className="headerbackground">
          <IonTitle className="headerbackground">Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow className="center">
            <IonCol>
              <div>Resultaten van deze week</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>
                <p>Wat je bent verloren:</p>
                <h1>-4kg</h1>
                <p>Jij bent bij stap:</p>
                <h1>2</h1>
              </div>
            </IonCol>
            <IonCol className="center">
              <div>
                <img src={kalMeter} alt="kalMeter" />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
