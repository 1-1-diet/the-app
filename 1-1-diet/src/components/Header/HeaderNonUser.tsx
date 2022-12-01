import { Component } from "react";
import { IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";
import styles from "./Header.module.css";
import ptrn from "../../Images/ptrn.svg";
import logo from "../../Images/logo.svg";

class HeaderNonUser extends Component {
  render() {
    return (
      <div className={styles.headerbackground}>
        <img src={ptrn} alt="food ptrn" className={styles.headerptrnNonUser} />
        <img
          src={logo}
          alt="Pech hij doet t niet"
          className={styles.headerlogo}
        />
        <div className={styles.content}>
          <IonGrid>
            <IonGrid className="ion-margin">
              <IonCol>
                <h1 className={styles.headertitle}>Maak jouw plan</h1>
              </IonCol>
              <IonCol>
                <p className={styles.headertitle}>
                  Ga met een van onze consultants in jouw buurt aan de slag om
                  een plan te maken
                </p>
              </IonCol>
              <IonCol>
                <IonRow className="ion-justify-content-center">
                  <IonButton className={styles.headerbutton}>
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

export default HeaderNonUser;
