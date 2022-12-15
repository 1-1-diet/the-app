import { IonContent, IonPage } from "@ionic/react";
import "./Tab1.css";
import Header from "../components/Header/HeaderUser";
import Stats from "../components/Stats/Stats";
import TipsVoorVandaag from "../components/TipsVoorVandaag";
import RecomendedBlogs from "../components/RecomendedBlogs/RecomendedBlogs";
import Water from "../components/WaterTracker/WaterTracker";
import Invite from "../components/Invite-friend-card/Invite-friend-card";
import Footer from "../components/Footer/Footer";

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
          <Invite />
          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
