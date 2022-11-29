import { IonPage } from "@ionic/react";
import "./Tab3.css";
import Header from "../components/profiel/header";

const Tab3: React.FC = () => {
  return (
    <IonPage className="mainContainer">
      <Header name="Fred Jansen" />
    </IonPage>
  );
};

export default Tab3;
