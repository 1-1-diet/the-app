import {
  IonContent,
  
  IonPage,
  

  
} from "@ionic/react";
import styles from "./tab4.module.css";
import SearchPage from "../components/SearchPage/SearchPage";


const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <SearchPage />
        
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
