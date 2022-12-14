import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonTitle,
  IonButton,
  IonHeader,
  IonToolbar,
  IonCol,
} from "@ionic/react";
import "./Tab1.css";
import Header from "../components/Header/HeaderUser";
import HeaderNonUser from "../components/Header/HeaderNonUser";
import Stats from "../components/Stats/Stats";
import Footer from "../components/Footer/Footer";
import Invite from "../components/Invite-friend-card/Invite-friend-card";
import Info from "../components/Inforcards/Inforcard";
import Divider from "../components/Divider/Divider";
import UitlegCard from "../components/UitlegCard/UitlegCard";
import TipsVoorVandaag from "../components/TipsVoorVandaag";
import Watereffect from "../components/Watereffect/Watereffect";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="mainContainer">
          <HeaderNonUser />
          <UitlegCard />
          <Divider />
          <TipsVoorVandaag />
          <Divider />
          <Info />
          <Divider />
          <Watereffect />
          <Divider />
          <Invite />
        </div>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
