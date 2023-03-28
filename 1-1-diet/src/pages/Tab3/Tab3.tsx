import { IonContent, IonPage } from "@ionic/react";
import "./Tab3.css";
import Header from "../../components/profiel/header";
import Gegevens from "../../components/Gegevens/Gegevens";
import Betaling from "../../components/Betaalmethode/Betaalmethode";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Gegevens />
        <Betaling />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
