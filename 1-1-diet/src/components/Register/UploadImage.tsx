import {
  IonCheckbox,
  IonText,
  IonInput,
  IonButton,
  IonCol,
  IonGrid,
} from "@ionic/react";
import styles from "./Register.module.css";
import BgPtrn from "../Splashscreen/BgPtrn";
import klap from "../../Images/logo2.svg";

export default function UploadImage() {
  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <img id={styles.klap} src={klap} alt="logo" />
        <div>
          <IonGrid>
            <IonCol>
              <IonText>Upload je eigen foto</IonText>
            </IonCol>
            <IonCol>
              <img src="" alt="" />
            </IonCol>
            <IonCol>
              <IonText>upload jouw foto</IonText>
            </IonCol>
          </IonGrid>
        </div>
      </div>
    </div>
  );
}
