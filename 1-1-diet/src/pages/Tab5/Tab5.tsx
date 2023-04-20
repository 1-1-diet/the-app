import { IonContent, IonPage } from "@ionic/react";
import styles from "./Tab5.module.css";
import Chat from "../../components/Chat/Chat";
import Call from "../../components/Chat/Call";
const Tab4: React.FC = () => {
  return (
    <IonPage className={styles.mainContainer}>
      <IonContent fullscreen>
        {/* <Chat /> */}
        <Call />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
