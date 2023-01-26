import { IonContent, IonPage } from "@ionic/react";
import "./Tab4.css";
import SearchPage from "../components/ProductPage/SearchPage/SearchPage";
import ProductSearch from "../components/ProductPage/ProductSearch/ProductSearch";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <SearchPage /> */}
        <ProductSearch />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
