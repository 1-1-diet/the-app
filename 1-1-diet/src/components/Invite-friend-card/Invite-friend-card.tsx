import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
} from "@ionic/react";
import { IonCard, IonText } from "@ionic/react";
import styles from "./Invite-friend-card.module.css";

function Invite() {
  return (
    <div className={styles.mainContainer}>
      <IonCard className={styles.iviteCard}>
        <div className={styles.textBox}>
          <IonText>
            <h5 className={styles.iviteCardText}>
              Nodig je vriend via de uit en krijg 20 euro kortting op je
              volgende besteling
            </h5>
          </IonText>

          <IonButton id="openmodal" expand="block">
            Lees Meer
          </IonButton>
        </div>

        <div className={styles.iviteCardLogoCoins}>
          <div className={styles.iviteCardLogo} />
        </div>
      </IonCard>
      <IonModal
        trigger="openmodal"
        initialBreakpoint={0.35}
        handleBehavior="cycle"
      >
        <IonContent>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://w7.pngwing.com/pngs/922/489/png-transparent-whatsapp-icon-logo-whatsapp-logo-whatsapp-logo-text-trademark-grass-thumbnail.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Stuur link via WhatsApp</h2>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk" />
            </IonAvatar>
            <IonLabel>
              <h2>Stuur link via Facebook</h2>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://helpdeskgeek.com/wp-content/pictures/2021/03/scan-qr-code.jpg" />
            </IonAvatar>
            <IonLabel>
              <h2>Maak een QR code</h2>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUA7MG3vYHRFDOnDzsUUXBP3tKG2wbDBHLDh-UliAo2zr50fx_spbaKWKcpSz88dhn5q0&usqp=CAU" />
            </IonAvatar>
            <IonLabel>
              <h2>Kopie link </h2>
            </IonLabel>
          </IonItem>
        </IonContent>
      </IonModal>
    </div>
  );
}

export default Invite;
