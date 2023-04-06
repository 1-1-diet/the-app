import { IonContent, IonPage } from "@ionic/react";
import "./Tab1.css";
import Header from "../../components/Header/HeaderUser";
import Stats from "../../components/Stats/Stats";
import RecomendedBlogs from "../../components/RecomendedBlogs/RecomendedBlogs";
import Water from "../../components/WaterTracker/WaterTracker";
import Divider from "../../components/Divider/Divider";
import TipsVoorVandaag from "../../components/TipvsVoorVandaag/TipsVoorVandaag";
import Invite from "../../components/Invite-friend-card/Invite-friend-card";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar/Navbar";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />
        <Header />
        <Stats />
        <Divider />
        {/* <Water /> */}
        <TipsVoorVandaag />
        <RecomendedBlogs />
        <Divider />
        <Invite />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
