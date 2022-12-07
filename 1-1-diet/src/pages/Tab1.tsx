import { IonContent, IonPage } from "@ionic/react";
import "./Tab1.css";
import Header from "../components/Header/HeaderUser";
import HeaderNonUser from "../components/Header/HeaderNonUser";
import Stats from "../components/Stats/Stats";
import Footer from "../components/Footer/Footer";
import Invite from "../components/Invite-friend-card/Invite-friend-card";
import Info from "../components/Inforcards/Inforcard";
import NonUserCard from "../components/Non-users-card/Non-users-card";
import TipsVoorVandaag from "../components/TipsVoorVandaag";
import RecomendedBlogs from "../components/RecomendedBlogs/RecomendedBlogs";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="mainContainer">
          <Header />
          <Stats />
          <TipsVoorVandaag />
          <RecomendedBlogs />
          <Invite />
          {/* <Footer /> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
