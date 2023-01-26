import { IonContent, IonPage } from "@ionic/react";
import "./Tab4.css";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import SearchPage from "../components/SearchPage/SearchPage";
import ProductSearch from "../components/ProductSearch/ProductSearch";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ProductDetails />
        <SearchPage />
        <ProductSearch />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
