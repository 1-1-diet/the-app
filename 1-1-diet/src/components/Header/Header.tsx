import React, { Component } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import "./Header.css";
import HeaderBackground from "../../Images/headerbackground.png";

class Header extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${HeaderBackground})` }}>
        <IonHeader>
          <IonToolbar>
            <IonRow className="ion-margin">
              <IonTitle>
                <div className="ion-text-center">Maak jouw plan</div>
              </IonTitle>
            </IonRow>
            <div className="ion-margin ion-text-center">
              Ga met een van onze consultants in jouw buurt aan de slag om een
              plan te maken
            </div>
            <IonRow className="ion-justify-content-center">
              <IonButton className="ion-margin">Start jouw dieet</IonButton>
            </IonRow>
          </IonToolbar>
        </IonHeader>
      </div>
    );
  }
}

export default Header;
