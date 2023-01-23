import { IonContent, IonPage } from "@ionic/react";
import styles from "./Tab1.module.css";
import Header from "../components/Header/HeaderUser";
import Stats from "../components/Stats/Stats";
import RecomendedBlogs from "../components/RecomendedBlogs/RecomendedBlogs";
import Water from "../components/WaterTracker/WaterTracker";
import Divider from "../components/Divider/Divider";
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
          <div className={styles.topmargin}>
            <Divider />
          </div>
          <div className={styles.topmargin}>
            <Water />
          </div>
          <div className={styles.topmargin}>
            <TipsVoorVandaag />
          </div>
          <div className={styles.topmargin}>
            <RecomendedBlogs />
          </div>
          <div className={styles.topmargin}>
            <Divider />
          </div>
          <div className={styles.topmargin}>
            <Invite />
          </div>
          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
