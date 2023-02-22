import { useState } from "react";
import {
  IonText,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  IonIcon,
  IonModal,
  IonContent,
  IonImg,
} from "@ionic/react";

import styles from "./Register.module.css";
import BgPtrn from "../Splashscreen/BgPtrn";
import logo from "../../Images/logo2.svg";
import camera from "../../Images/camera.png";
import { createOutline, cameraOutline, imageOutline } from "ionicons/icons";
import { usePhotoGallery } from "./usePhotoGallery";

export default function UploadImage() {
  const { photos, takePhoto } = usePhotoGallery();

  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <img className={styles.klap} id={styles.klap} src={logo} alt="logo" />
        <div>
          <IonGrid>
            <IonCol>
              <div className={styles.title}>
                <IonText>Upload je eigen foto</IonText>
              </div>
              {photos.map((photo, index) => (
                <IonCol key={index}>
                  <img
                    className={styles.profile}
                    src={takePhoto === null ? camera : photo.webviewPath}
                    alt="profileimg"
                  />
                </IonCol>
              ))}

              <IonGrid>
                <IonRow>
                  <IonCol className={styles.uploadImage}>
                    <IonText className={styles.editName}>
                      Upload jouw foto
                    </IonText>
                    <IonButton
                      className={styles.uploadButton}
                      id="open-modal"
                      fill="clear"
                    >
                      <IonIcon icon={createOutline} color="secondary" />
                    </IonButton>
                    <IonModal
                      trigger="open-modal"
                      initialBreakpoint={0.25}
                      breakpoints={[0, 0.25, 0.5, 0.75]}
                      handleBehavior="cycle"
                    >
                      <IonContent className="ion-padding">
                        <div className="ion-margin-top">
                          <IonGrid>
                            <IonRow>
                              <IonCol>
                                <IonButton
                                  onClick={() => takePhoto()}
                                  className={styles.modalButton}
                                  fill="clear"
                                >
                                  <IonIcon
                                    className={styles.uploadModalButton}
                                    icon={cameraOutline}
                                    color="secondary"
                                  />
                                  <IonText className={styles.uploadText}>
                                    Maak een foto
                                  </IonText>
                                </IonButton>
                              </IonCol>
                              <IonCol>
                                <IonButton
                                  className={styles.modalButton}
                                  fill="clear"
                                >
                                  <IonIcon
                                    className={styles.uploadModalButton}
                                    icon={imageOutline}
                                    color="secondary"
                                  />
                                  <IonText className={styles.uploadText}>
                                    Kies een foto uit je gallerij
                                  </IonText>
                                </IonButton>
                              </IonCol>
                            </IonRow>
                          </IonGrid>
                        </div>
                      </IonContent>
                    </IonModal>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonGrid>
        </div>
        <div className={styles.button}>
          <IonButton
            className={styles.butt}
            color="secondary"
            onChange={() => takePhoto()}
          >
            Maak account
          </IonButton>
        </div>
      </div>
    </div>
  );
}
