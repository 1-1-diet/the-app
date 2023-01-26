import { IonContent, IonPage } from "@ionic/react";
import "./Tab4.css";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ProductDetails />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
