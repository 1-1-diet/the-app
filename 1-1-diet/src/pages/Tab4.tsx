import { IonContent, IonPage } from "@ionic/react";
import "./Tab4.css";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import SearchPage from "../components/SearchPage/SearchPage";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ProductDetails />
        <SearchPage />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
