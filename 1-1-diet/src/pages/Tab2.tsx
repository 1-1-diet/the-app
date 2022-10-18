import {
  IonContent,
  IonPage,
  IonCol,
  IonRow,
  useIonViewWillEnter,
  useIonModal,
  IonButton,
  IonInput,
  IonItem,
} from "@ionic/react";
import { useRef, useState } from "react";
import "./Tab2.css";
import { GoogleMap } from "@capacitor/google-maps";
import { markers } from "../components/index";
import { MarkerInfoWindow } from "../components/MarkInfoWindow";

const Tab2: React.FC = () => {
  const key = "AIzaSyBQoikjV2k-ithxstHq7Qp0WsHfyzmXIVE";
  const mapRef = useRef(null);
  let newMap: GoogleMap;

  const [selectedMarker, setSlectedMarker] = useState(null);
  const [present, dismiss] = useIonModal(MarkerInfoWindow, {
    marker: selectedMarker,
  });

  const [mapConfig, setMapConfig] = useState({
    zoom: 12,
    center: {
      lat: markers[0].lat,
      lng: markers[0].lng,
    },
  });

  const createMap = async () => {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: "google-map",
      element: mapRef.current,
      apiKey: key,
      config: mapConfig,
    });

    newMap.setOnMarkerClickListener((marker) => markerClick(marker));
    addMapMarkers();
  };

  const addMapMarker = async (marker: any) => {
    await newMap.addMarker({
      coordinate: {
        lat: marker.lat,
        lng: marker.lng,
      },
      title: marker.title,
    });
  };

  const modalOptions = {
    initialBreakpoint: 0.4,
    breakpoints: [0, 0, 4],
    backdropBreakpoint: 0,
    onDidDismiss: () => dismiss(),
  };

  const markerClick = (marker: any) => {
    setSlectedMarker(
      markers.filter(
        (m: any) => m.lat === marker.latitude && m.lng === marker.longitude
      )[0]
    );
    present(modalOptions);
  };

  const addMapMarkers = () => markers.forEach((marker) => addMapMarker(marker));

  useIonViewWillEnter(() => createMap());

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="center">
          <IonRow className="searchBar">
            <IonItem>
              <IonInput placeholder="Jouw loactie"></IonInput>
            </IonItem>
            <IonCol>
              <IonButton className="zoekBtn">Zoeken</IonButton>
            </IonCol>
          </IonRow>
        </div>
        <IonRow>
          <IonCol>
            <capacitor-google-map ref={mapRef} id="map" />
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
