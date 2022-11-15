import React, { Component } from "react";
import { logoFacebook } from "ionicons/icons";
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
  IonIcon
} from "@ionic/react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      
        <IonFooter>
          <IonGrid>
            <IonCol>
              <h1>Zoek een consultent</h1>
            </IonCol>
            <IonCol>
              <IonSearchbar placeholder="Zoek een postcode of plaats"></IonSearchbar>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonCol>
                  Join us!
                </IonCol>
                <IonCol>
                  <IonButton>
                    <IonIcon icon={ logoFacebook }/>
                  </IonButton>
                </IonCol>
                <IonCol>
                <IonButton>
                    <IonIcon icon={ logoFacebook }/>
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton>
                    <IonIcon icon={ logoFacebook }/>
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonFooter>
      
    )

  }
}

export default Footer;
