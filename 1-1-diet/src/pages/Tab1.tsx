import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import kalMeter from '../Images/kalMeter.png'
import headerbackground from '../Images/headerbackground.png'

const Tab1: React.FC = () => {
  return (
    <IonPage >
        <IonHeader className="background">
          <IonToolbar>
            <IonTitle >Maak jouw plan</IonTitle>
            
              <div>Ga met een van onze consultants in jouw buurt aan de slag om een plan te maken</div>
            
            <IonButton>
              Start jouw dieet
            </IonButton>
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

        <IonGrid>
          <IonRow>
            <div>
              Tips voor vandaag
            </div>
            <div>
              Toon alle
            </div>
          </IonRow>
          <IonRow>
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
