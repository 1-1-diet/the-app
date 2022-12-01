import React from "react";
import { IonCard, IonButton, IonText } from "@ionic/react";
import styles from "./Non-users-card.module.css";

const Home: React.FC = () => {
  return (
    <IonCard className={styles.nonUserCard}>
      <div className={styles.nonUserCardLogo}>
        <IonText className={styles.nonUserCardText}>
          Register nu en krijg 20 procent korting op je volgende bestelling
        </IonText>
        <IonButton className={styles.nonUserCardButton} color="light">
          Register nu
        </IonButton>
      </div>
    </IonCard>
  );
};
export default Home;
