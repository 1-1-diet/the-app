import React, { Component } from "react";
import {
  IonText,
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
import ptrn from "../../Images/ptrn.svg";
import logo from "../../Images/logo.svg";

class Header extends Component {
  render() {
    return (
      <div className="headerbackground">
        <img src={ptrn} alt="food ptrn" className="headerptrn" />
        <img src={logo} alt="Pech hij doet t niet" className="headerlogo" />
        <div className="content">
          <IonGrid>
            <IonGrid className="ion-margin">
              <IonCol>
                <h1 className="headertitle">Maak jouw plan</h1>
              </IonCol>
              <IonCol>
                <p className="headertitle">
                  Ga met een van onze consultants in jouw buurt aan de slag om
                  een plan te maken
                </p>
              </IonCol>
              <IonCol>
                <IonRow className="ion-justify-content-center">
                  <IonButton className="headerbutton">
                    Start jouw dieet
                  </IonButton>
                </IonRow>
              </IonCol>
            </IonGrid>
          </IonGrid>
        </div>
      </div>
    );
  }
}

export default Header;
