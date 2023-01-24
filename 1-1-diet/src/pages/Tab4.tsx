import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab4.css";
import ProductSearch from "../components/ProductSearch/ProductSearch";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ProductSearch />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
