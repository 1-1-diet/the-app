import { useState, useRef, useEffect } from "react";
import { Share } from "@capacitor/share";
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
  useIonAlert,
} from "@ionic/react";
import { IonCard, IonText } from "@ionic/react";
import styles from "./Invite-friend-card.module.css";

function Invite() {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const [isOpen, SetIsOpen] = useState(false);

  const [presentAlert] = useIonAlert();

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  async function openModal() {
    if ((await (await Share.canShare()).value) === true) {
      await Share.share({
        title:
          "Hey, ik gebruik het 1 op 1 dieët misschien is het ook wat voor jou!",
        text: "Als jij via mijn link je aanmeld krijgen we alle 2 een leuke bonus",
        url: "1op1dieet.nl",
        dialogTitle: "Korting delen",
      });
    } else {
      SetIsOpen(true);
    }
  }

  function createAlert() {
    presentAlert({
      header: "Alert",
      subHeader: "QR code",
      message:
        '<img src="http://api.qrserver.com/v1/create-qr-code/?data=1op1dieet%C2%B7nl">',
      buttons: ["Klaar"],
    });
  }

  function sendToWhatsapp() {
    window.location.href =
      "https://wa.me/?text=Als%20jij%20via%20mijn%20link%20je%20aanmeld%20krijgen%20we%20alle%202%20een%20leuke%20bonus%0a1op1dieet.nl";
  }

  function sendToTelegram() {
    window.location.href =
      "https://t.me/share/url?url=1op1dieet.nl&text=Als%20jij%20via%20mijn%20link%20je%20aanmeld%20krijgen%20we%20alle%202%20een%20leuke%20bonus";
  }

  async function copyText() {
    await navigator.clipboard.writeText("1op1dieet.nl");
  }

  const modalLinks = [
    {
      title: 1,
      onClick: sendToWhatsapp,
      img: "https://w7.pngwing.com/pngs/922/489/png-transparent-whatsapp-icon-logo-whatsapp-logo-whatsapp-logo-text-trademark-grass-thumbnail.png",
      label: "Stuur link via WhatsApp",
    },
    {
      title: 2,
      onClick: createAlert,
      img: "https://helpdeskgeek.com/wp-content/pictures/2021/03/scan-qr-code.jpg",
      label: "Maak een QR code",
    },
    {
      title: 3,
      onClick: copyText,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUA7MG3vYHRFDOnDzsUUXBP3tKG2wbDBHLDh-UliAo2zr50fx_spbaKWKcpSz88dhn5q0&usqp=CAU",
      label: "Kopie link",
    },
    {
      title: 4,
      onClick: sendToTelegram,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png",
      label: "Stuur link via telegram",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <IonCard className={styles.iviteCard}>
        <div className={styles.textBox}>
          <IonText>
            <h5 className={styles.iviteCardText}>
              Nodig je vriend via de uit en krijg 20 euro korting op je volgende
              besteling
            </h5>
          </IonText>

          <IonButton expand="block" onClick={() => openModal()}>
            Lees Meer
          </IonButton>
        </div>

        <div className={styles.iviteCardLogoCoins}>
          <div className={styles.iviteCardLogo} />
        </div>
      </IonCard>

      <IonModal
        ref={modal}
        isOpen={isOpen}
        presentingElement={presentingElement!}
      >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Nodig je vriend nu uit </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => SetIsOpen(false)}>Terug</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <div>
              {modalLinks.map((links) => {
                return (
                  <IonItem button key={links.title} onClick={links.onClick}>
                    <IonAvatar slot="start">
                      <IonImg src={links.img} />
                    </IonAvatar>
                    <IonLabel>
                      <h2>{links.label}</h2>
                    </IonLabel>
                  </IonItem>
                );
              })}
            </div>
          </IonList>
        </IonContent>
      </IonModal>
    </div>
  );
}

export default Invite;
