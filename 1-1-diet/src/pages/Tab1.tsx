import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import kalMeter from '../Images/kalMeter.png'
import headerbackground from '../Images/headerbackground.png'



const Tab1: React.FC = () => {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();
  
  if (hours < 12) {
    timeOfDay = 'morgen';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'middag'
  } else {
    timeOfDay = 'Avond'
  }

  return (
    <IonPage >
        <IonHeader>
          <IonToolbar>
            <IonRow className="ion-margin">
              <IonTitle>
                <div className="ion-text-center">
                  Maak jouw plan
                </div>
              </IonTitle>
            </IonRow>
              <div className="ion-margin ion-text-center">Ga met een van onze consultants in jouw buurt aan de slag om een plan te maken</div>
            <IonRow className="ion-justify-content-center">
              <IonButton className="ion-margin">
                Start jouw dieet
              </IonButton>
            </IonRow>
            
          </IonToolbar>
        </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow className="ion-margin">
            <IonCol className="ion-text-center">
              <div >Goeie {timeOfDay}</div>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin">
            <IonCol className="ion-text-center">
              <div >Resultaten van deze week</div>
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

        <IonGrid>
          <IonRow className="ion-justify-content-between ion-padding">
            <div>
              Tips voor vandaag
            </div>
            <div>
              Toon alle
            </div>
          </IonRow>
          <IonRow className="ion-justify-content-between">
            <IonButton>
              Ontbijt
            </IonButton>
            <IonButton>
              lunch
            </IonButton>
            <IonButton>
              diner
            </IonButton>
            <IonButton>
              snack
            </IonButton>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
