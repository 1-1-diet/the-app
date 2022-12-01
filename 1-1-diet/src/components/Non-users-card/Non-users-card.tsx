import React from "react";
import { IonCard, IonButton, IonText } from "@ionic/react";
import "./Non-users-card.css";

const Home: React.FC = () => {
  return (
    <IonCard className="non-user-card">
      <div className="non-user-card-logo">
        <IonText className="non-user-card-text">
          Register nu en krijg 20 procent korting op je volgende bestelling
        </IonText>
        <IonButton className="non-user-card-button" color="light">
          Register nu
        </IonButton>
      </div>
    </IonCard>
  );
};
export default Home;
