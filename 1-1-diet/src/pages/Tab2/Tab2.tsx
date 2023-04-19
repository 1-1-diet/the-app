import {
  IonContent,
  IonPage,
  IonRow,
  useIonViewWillEnter,
  useIonModal,
  IonButton,
  IonPopover,
  IonIcon,
  IonRadioGroup,
  IonRadio,
  IonLabel,
} from "@ionic/react";
import { optionsOutline } from "ionicons/icons";
import { useRef, useState } from "react";
import "./Tab2.css";
import styles from "./Tab2.module.css";
import { GoogleMap } from "@capacitor/google-maps";
import { markers } from "../../components/ConsulentenMap/index";
import { MarkerInfoWindow } from "../../components/ConsulentenMap/MarkInfoWindow";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

const Tab2: React.FC = () => {
  const key = "AIzaSyBQoikjV2k-ithxstHq7Qp0WsHfyzmXIVE";
  const mapRef = useRef(null);
  let newMap: GoogleMap;

  const [selectedMarker, setSelectedMarker] = useState<Marker>();
  const [value, setValue] = useState(null);

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

  const getLatLng = (result: google.maps.GeocoderResult): Promise<any> =>
    geocodeByAddress("Montevideo, Uruguay")
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) =>
        console.log("Successfully got latitude and longitude", { lat, lng })
      );

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
    breakpoints: [0, 0.4, 0.8],
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

  const filter = [
    {
      geslacht: [
        {
          title: "Man",
          value: "man",
        },
        {
          title: "Vrouw",
          value: "vrouw",
        },
        {
          title: "Allebij",
          value: "man-vrouw",
        },
      ],
      specialisatie: [
        {
          title: "Onwards coach",
          value: "onwardsCoach",
        },
        {
          title: "Online coach",
          value: "onlineCoach",
        },
        {
          title: "Allebij",
          value: "onwardsCoach-onlineCoach",
        },
      ],
    },
  ];

  return (
    <IonPage>
      <IonContent fullscreen>
        <capacitor-google-map ref={mapRef} />
        <div className={styles.center}>
          <div className={styles.searchBar}>
            <GooglePlacesAutocomplete
              apiKey={key}
              apiOptions={{ language: "nl", region: "nl" }}
              onLoadFailed={(error: any) =>
                console.error("Could not inject Google script", error)
              }
              selectProps={{
                value,
                onChange: setValue,
              }}
            />
          </div>
        </div>
        <div color="secondary" className={styles.filterBtn} id="click-trigger">
          <IonIcon className={styles.icon} icon={optionsOutline} />
        </div>
        <IonPopover
          trigger="click-trigger"
          side="bottom"
          alignment="center"
          triggerAction="click"
        >
          <div className={styles.filterContainer}>
            <IonRadioGroup className={styles.filterContent} value="man-vrouw">
              <IonLabel>Geslacht</IonLabel>
              {filter[0].geslacht?.map((element) => {
                return (
                  <div>
                    <div className={styles.textContainer}>
                      <IonRadio value={element.value}></IonRadio>
                      <IonLabel>{element.title}</IonLabel>
                    </div>
                  </div>
                );
              })}
            </IonRadioGroup>
            <IonRadioGroup
              className={styles.filterContent}
              value="onwardsCoach-onlineCoach"
            >
              <IonLabel>Specialisatie</IonLabel>
              {filter[0].specialisatie?.map((element) => {
                return (
                  <div>
                    <div className={styles.textContainer}>
                      <IonRadio value={element.value}></IonRadio>
                      <IonLabel>{element.title}</IonLabel>
                    </div>
                  </div>
                );
              })}
            </IonRadioGroup>
          </div>
        </IonPopover>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
