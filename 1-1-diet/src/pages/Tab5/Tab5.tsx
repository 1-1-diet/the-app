import { IonContent, IonPage } from "@ionic/react";
import styles from "./Tab5.module.css";
import ChatList from "../../components/Chat/ChatList";
import Call from "../../components/Chat/Call";
import Chat from "../../components/Chat/Chat";
const Tab4: React.FC = () => {
  return (
    <IonPage className={styles.mainContainer}>
      <IonContent fullscreen>
        <ChatList />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
