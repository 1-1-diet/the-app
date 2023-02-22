import { IonContent, IonPage } from "@ionic/react";
import "./Tab3.css";
import Header from "../../components/profiel/header";
import QuickOptions from "../../components/profiel/quichOptions";
import Card from "../../components/profiel/card";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header name="Hendrik Jansen" />
        <div className="mainContent">
          <QuickOptions />
          <Card />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
