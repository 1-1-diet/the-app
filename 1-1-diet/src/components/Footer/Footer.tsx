import React, { Component } from "react";
import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoPinterest,
  logoYoutube,
} from "ionicons/icons";
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
  IonSearchbar,
  IonFooter,
  IonIcon,
} from "@ionic/react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <IonFooter>
        <IonGrid>
          <IonCol>
            <h1>Zoek een consultent!</h1>
          </IonCol>
          <IonCol>
            <IonSearchbar placeholder="Zoek een postcode of plaats"></IonSearchbar>
          </IonCol>
          <IonCol>
            <IonRow>
              <IonCol>Join us!</IonCol>
              <IonCol>
                <a>
                  <IonIcon icon={logoFacebook} />
                </a>
              </IonCol>
              <IonCol>
                <a>
                  <IonIcon icon={logoInstagram} />
                </a>
              </IonCol>
              <IonCol>
                <a>
                  <IonIcon icon={logoTwitter} />
                </a>
              </IonCol>
              <IonCol>
                <a>
                  <IonIcon icon={logoPinterest} />
                </a>
              </IonCol>
              <IonCol>
                <a>
                  <IonIcon icon={logoYoutube} />
                </a>
              </IonCol>
            </IonRow>
          </IonCol>
          <IonRow>
            <IonCol className="ion-margin">
              <p>
                De 1:1 Diet ondersteunt onderzoek aan het Erasmus MC. Patienten
                met diabetes worden in dit onderzoek persoonlijk begeleid door
                dietisten met behulp van een dieet app.
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    );
  }
}

export default Footer;
