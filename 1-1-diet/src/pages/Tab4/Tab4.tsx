import { IonContent, IonPage } from "@ionic/react";
import "./Tab4.css";
import styles from "./Tab4.module.css";
import SearchPage from "../../components/ProductPage/SearchPage/SearchPage";
import ProductSearch from "../../components/ProductPage/ProductSearch/ProductSearch";

const Tab4: React.FC = () => {
  return (
    <IonPage className={styles.mainContainer}>
      <IonContent fullscreen>
        {/* <SearchPage /> */}
        <ProductSearch />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
