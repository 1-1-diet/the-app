import { IonContent, IonPage } from "@ionic/react";
import "./Tab3.css";
import Header from "../components/profiel/header";
import QuickOptions from "../components/profiel/quichOptions";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header name="Hendrik Jansen" />
        <QuickOptions />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
