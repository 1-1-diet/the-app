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
                <label>Naam consulent</label>
                <label>Locatie consulent</label>
              </div>
            </div>
          </IonButton>
          <IonRow>
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

// <IonLabel>
//         <h1>{marker.title}</h1>
//       </IonLabel>
//       <IonRow className="ion-justify-content-start ion-align-items-center">
//         <IonCol size="2">
//           <IonIcon
//             icon={locationOutline}
//             color="primary"
//             style={{ fontSize: "1.5rem" }}
//           />
//         </IonCol>

//         <IonCol size="10">{marker.address}</IonCol>
//       </IonRow>

//       <IonRow className="ion-justify-content-start ion-align-items-center">
//         <IonCol size="2">
//           <IonIcon
//             icon={globeOutline}
//             color="primary"
//             style={{ fontSize: "1.5rem" }}
//           />
//         </IonCol>

//         <IonCol size="10">{marker.website}</IonCol>
//       </IonRow>

//       <IonRow className="ion-justify-content-start ion-align-items-center">
//         <IonCol size="2">
//           <IonIcon
//             icon={phonePortraitOutline}
//             color="primary"
//             style={{ fontSize: "1.5rem" }}
//           />
//         </IonCol>

//         <IonCol size="10">{marker.phone}</IonCol>
//       </IonRow>

//       <IonRow>
//         <IonButton>
//           <IonIcon icon={heartOutline} />
//           &nbsp; Favourite
//         </IonButton>
//         <IonButton>
//           <IonIcon icon={navigateOutline} />
//           &nbsp; Navigate
//         </IonButton>
//       </IonRow>
