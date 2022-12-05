import { IonContent, IonPage } from "@ionic/react";
import "./Tab1.css";
import Header from "../components/Header/HeaderUser";
import Stats from "../components/Stats/Stats";
import TipsVoorVandaag from "../components/TipsVoorVandaag";
import RecomendedBlogs from "../components/RecomendedBlogs/RecomendedBlogs";
import Water from "../components/WaterTracker/WaterTracker";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="mainContainer">
          <Header />
          <Stats />
          <Water />
          <TipsVoorVandaag />
          <RecomendedBlogs />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
