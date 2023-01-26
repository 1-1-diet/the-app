import { IonContent, IonPage } from "@ionic/react";
import "./Tab4.css";
import ProductDetails from "../components/ProductPage/ProductDetails/ProductDetails";
import SearchPage from "../components/ProductPage/SearchPage/SearchPage";
import ProductSearch from "../components/ProductPage/ProductSearch/ProductSearch";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <SearchPage /> */}
        {/* <ProductSearch /> */}
        <ProductDetails />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
