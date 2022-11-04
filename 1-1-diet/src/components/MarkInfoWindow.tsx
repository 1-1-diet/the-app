import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonLabel,
  IonNote,
  IonRow,
} from "@ionic/react";
import {
  globeOutline,
  heartOutline,
  locationOutline,
  navigateOutline,
  phonePortraitOutline,
} from "ionicons/icons";
import "./MarkInfoWindow.css";

export const MarkerInfoWindow = ({ marker, dismiss }: any) => {
  return (
    <IonContent>
      <IonCol>
        <h1>Zoek een consulent</h1>
        <div className="popupCard">
          <IonButton color="medium" className="profileIonBtn">
            <div className="profileBtn">
              <div className="profilePic"></div>
              <div className="profileInfo">
                <label>{marker.name}</label>
                <label>{marker.address}</label>
              </div>
            </div>
          </IonButton>
          <IonRow className="contactContainer">
            <IonButton className="callBtn" color="medium">
              call
            </IonButton>
            <IonButton className="msgBtn" color="danger">
              msg
            </IonButton>
          </IonRow>
        </div>
      </IonCol>
    </IonContent>
  );
};
