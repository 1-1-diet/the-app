import { IonContent, IonPage } from "@ionic/react";
import styles from "./Tab5.module.css";
import Chat from "../../components/Chat/Chat";
const Tab4: React.FC = () => {
  return (
    <IonPage className={styles.mainContainer}>
      <IonContent fullscreen>
        <Chat />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
