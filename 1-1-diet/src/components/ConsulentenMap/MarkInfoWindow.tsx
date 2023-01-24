import { IonButton, IonCol, IonContent, IonRow } from "@ionic/react";
import styles from "./MarkInfoWindow.module.css";

export const MarkerInfoWindow = ({ marker, dismiss }: any) => {
  return (
    <IonContent>
      <IonCol>
        <h1 id={styles.markerTitle}>Zoek een consulent</h1>
        <div className={styles.popupCard}>
          <IonButton color="medium" className={styles.profileIonBtn}>
            <div className={styles.profileBtn}>
              <div className={styles.profilePic}></div>
              <div className={styles.profileInfo}>
                <label>{marker.name}</label>
                <label>{marker.address}</label>
              </div>
            </div>
          </IonButton>
          <IonRow className={styles.contactContainer}>
            <IonButton className={styles.callBtn} color="medium">
              call
            </IonButton>
            <IonButton className={styles.msgBtn} color="danger">
              msg
            </IonButton>
          </IonRow>
        </div>
      </IonCol>
    </IonContent>
  );
};
