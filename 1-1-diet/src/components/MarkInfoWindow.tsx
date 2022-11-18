import { IonButton, IonCol, IonContent, IonRow } from "@ionic/react";
import "./MarkInfoWindow.css";

export const MarkerInfoWindow = ({ marker, dismiss }: any) => {
  return (
    <IonContent>
      <IonCol>
        <h1 id="markerTitle">Zoek een consulent</h1>
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
