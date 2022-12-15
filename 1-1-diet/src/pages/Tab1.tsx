import { IonContent, IonPage } from "@ionic/react";
import "./Tab1.css";
import Header from "../components/Header/HeaderUser";
import Stats from "../components/Stats/Stats";
import RecomendedBlogs from "../components/RecomendedBlogs/RecomendedBlogs";
import Water from "../components/WaterTracker/WaterTracker";
import Info from "../components/Inforcards/Inforcard";
import Divider from "../components/Divider/Divider";
import UitlegCard from "../components/UitlegCard/UitlegCard";
import TipsVoorVandaag from "../components/TipsVoorVandaag";
import Invite from "../components/Invite-friend-card/Invite-friend-card";
import Footer from "../components/Footer/Footer";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="mainContainer">
          <Header />
          <Stats />
          <Divider />
          <Water />
          <TipsVoorVandaag />
          <RecomendedBlogs />
          <Divider />
          <RecomendedBlogs />
          <ProductSwiper />
          <Invite />
          <Footer />
        </div>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
