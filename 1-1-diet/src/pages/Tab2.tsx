import {
  IonContent,
  IonPage,
  IonCol,
  IonRow,
  useIonViewWillEnter,
  useIonModal,
  IonButton,
  IonInput,
  IonPopover,
  IonIcon,
  IonRadioGroup,
  IonRadio,
  IonLabel,
} from "@ionic/react";
import { optionsOutline } from "ionicons/icons";
import { useRef, useState, useEffect } from "react";
import "./Tab2.css";
import { GoogleMap } from "@capacitor/google-maps";
import { markers } from "../components/index";
import { MarkerInfoWindow } from "../components/MarkInfoWindow";

const Tab2: React.FC = () => {
  const key = "AIzaSyBQoikjV2k-ithxstHq7Qp0WsHfyzmXIVE";
  const mapRef = useRef(null);
  let newMap: GoogleMap;

  const [selectedMarker, setSelectedMarker] = useState<Marker>();

  interface Marker {
    lat: number;
    lng: number;
    title: string;
    image: string;
    name: string;
    address: string;
    phone: string;
    mail: string;
  }

  interface MapCallBackData {
    latitude: number;
    longitude: number;
  }

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
    initialBreakpoint: 0.3,
    breakpoints: [0, 0, 0.3],
    backdropBreakpoint: 0,
    onDidDismiss: () => dismiss(),
  };

  const markerClick = (marker: MapCallBackData) => {
    setSelectedMarker(
      markers.filter(
        (m: Marker) => m.lat === marker.latitude && m.lng === marker.longitude
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
            <IonInput className="input" placeholder="Jouw loactie"></IonInput>
            <IonButton color="navigatie" className="zoekBtn">
              Zoeken
            </IonButton>
          </IonRow>
        </div>
        <IonButton
          color="secondary"
          shape="round"
          className="filterBtn"
          id="click-trigger"
        >
          <IonIcon className="icon" icon={optionsOutline} />
        </IonButton>
        <IonPopover trigger="click-trigger" triggerAction="click">
          <IonRadioGroup value="custom-checked">
            <IonRow>
              <IonRadio value="custom"></IonRadio>
              <IonLabel>Man</IonLabel>
            </IonRow>
            <IonRow>
              <IonRadio value="custom-"></IonRadio>
              <IonLabel>Vrouw</IonLabel>
            </IonRow>
          </IonRadioGroup>
          <IonRadioGroup value="custom-checked">
            <IonRow>
              <IonRadio value="custom"></IonRadio>
              <IonLabel>Onwards coach</IonLabel>
            </IonRow>
            <IonRow>
              <IonRadio value="custom-"></IonRadio>
              <IonLabel>Online coach</IonLabel>
            </IonRow>
          </IonRadioGroup>
        </IonPopover>
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
