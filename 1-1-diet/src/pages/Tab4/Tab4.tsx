import { IonContent, IonPage } from "@ionic/react";
import "./Tab4.css";
import styles from "./Tab4.module.css";
import ProductSearch from "../../components/ProductPage/ProductSearch/ProductSearch";

const Tab4: React.FC = () => {
  return (
    <IonPage className={styles.mainContainer}>
      <IonContent fullscreen>
        <ProductSearch />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
