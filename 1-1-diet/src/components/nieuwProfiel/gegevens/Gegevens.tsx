import React, { useEffect, useRef, useState } from "react";
import {
  IonGrid,
  IonText,
  IonCol,
  IonRow,
  IonIcon,
  IonCard,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonButtons,
  IonButton,
  IonItem,
  IonInput,
} from "@ionic/react";
import styles from "./Gegevens.module.css";
import betaal from "./Betaalmethode.module.css";
import { Settings } from "./UserSettings";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  chevronForwardOutline,
  transgenderOutline,
  calendarOutline,
  homeOutline,
  mailOutline,
  callOutline,
} from "ionicons/icons";

import { UserProfile } from "../../data";

export default function Instellingen() {
  const [showDate, setShowDate] = useState(false);
  const toggleShowDate = () => {
    setShowDate(!showDate);
  };

  const [date, setDate] = useState<string | string[]>("2013-03-10T02:00:00Z");
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);
  const reset = () => {
    datetime.current?.reset();
  };
  const cancel = () => {
    datetime.current?.cancel();
    toggleShowDate();
  };
  const confirm = () => {
    datetime.current?.confirm();
    toggleShowDate();
  };

  const [adress, setAdress] = useState("siliciumweg 12a");
  const [showAdress, setShowAdress] = useState(false);
  const toggleShowAdress = () => {
    setShowAdress(!showDate);
  };

  const [email, setEmail] = useState("1op1@dieet.nl");
  const [showEmail, setShowEmail] = useState(false);
  const toggleShowEmail = () => {
    setShowEmail(!showEmail);
  };

  const [nummer, setNummer] = useState("06 12345678");
  const [showNummer, setShowNummer] = useState(false);
  const toggleShowNummer = () => {
    setShowNummer(!showNummer);
  };
  return (
    <div>
      <IonGrid>
        <IonCol className={styles.center}>
          {/* Geslacht */}
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              <IonIcon
                icon={transgenderOutline}
                size="large"
                color="secondary"
              />
              <IonText>Geslacht</IonText>
            </div>
            <IonSelect
              itemType="Alert"
              interfaceOptions={{ header: "Kies jouw geslacht" }}
              interface="alert"
              placeholder="Man"
            >
              <IonSelectOption value="bacon">Man</IonSelectOption>
              <IonSelectOption value="onions">Vrouw</IonSelectOption>
              <IonSelectOption value="pepperoni">Anders</IonSelectOption>
            </IonSelect>
          </div>
          {/* Geboortedatum */}
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              <IonIcon icon={calendarOutline} size="large" color="secondary" />
              <IonText>Geboortedatum</IonText>
            </div>
            <div onClick={toggleShowDate} className={styles.titleContainer}>
              <IonText>{date.slice(0, 10)}</IonText>
              <IonIcon
                icon={chevronForwardOutline}
                size="large"
                color="secondary"
              />
            </div>
            <div
              id={showDate ? `` : `${styles.hide}`}
              className={styles.backgroundBlur}
            >
              <IonDatetime
                ref={datetime}
                presentation="date"
                value={date}
                onIonChange={(e) => {
                  if (!e.detail?.value) {
                    return;
                  }
                  setDate(e.detail.value);
                }}
              >
                <IonButtons slot="buttons">
                  <IonButton color="danger" onClick={reset}>
                    Reset
                  </IonButton>
                  <IonButton color="primary" onClick={cancel}>
                    Cancel
                  </IonButton>
                  <IonButton color="primary" onClick={confirm}>
                    Done
                  </IonButton>
                </IonButtons>
              </IonDatetime>
            </div>
          </div>
          {/* Adress */}
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              <IonIcon icon={homeOutline} size="large" color="secondary" />
              <IonText>Adress</IonText>
            </div>
            <div onClick={toggleShowAdress} className={styles.titleContainer}>
              <IonText>{adress.substring(0, 10)}...</IonText>
              <IonIcon
                icon={chevronForwardOutline}
                size="large"
                color="secondary"
              />
            </div>
            <div
              id={showAdress ? `` : `${styles.hide}`}
              className={styles.backgroundBlur}
            >
              <IonItem>
                <IonInput
                  placeholder="Adress"
                  onIonChange={(e) => {
                    if (!e.detail?.value) {
                      return;
                    }
                    setAdress(e.detail.value);
                  }}
                />
                <IonButton onClick={() => setShowAdress(false)}>Done</IonButton>
              </IonItem>
            </div>
          </div>
          {/* Email */}
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              <IonIcon icon={mailOutline} size="large" color="secondary" />
              <IonText>Email</IonText>
            </div>
            <div onClick={toggleShowEmail} className={styles.titleContainer}>
              <IonText>{email.substring(0, 10)}...</IonText>
              <IonIcon
                icon={chevronForwardOutline}
                size="large"
                color="secondary"
              />
            </div>
            <div
              id={showEmail ? `` : `${styles.hide}`}
              className={styles.backgroundBlur}
            >
              <IonItem>
                <IonInput
                  type="email"
                  placeholder="Email"
                  onIonChange={(e) => {
                    if (!e.detail?.value) {
                      return;
                    }
                    setEmail(e.detail.value);
                  }}
                />
                <IonButton onClick={() => setShowEmail(false)}>Done</IonButton>
              </IonItem>
            </div>
          </div>
          {/* T - nummer */}
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              <IonIcon icon={callOutline} size="large" color="secondary" />
              <IonText>T - nummer</IonText>
            </div>
            <div onClick={toggleShowNummer} className={styles.titleContainer}>
              <IonText>{nummer.substring(0, 10)}...</IonText>
              <IonIcon
                icon={chevronForwardOutline}
                size="large"
                color="secondary"
              />
            </div>
            <div
              id={showNummer ? `` : `${styles.hide}`}
              className={styles.backgroundBlur}
            >
              <IonItem>
                <IonInput
                  type="tel"
                  placeholder="Adress"
                  onIonChange={(e) => {
                    if (!e.detail?.value) {
                      return;
                    }
                    setNummer(e.detail.value);
                  }}
                />
                <IonButton onClick={() => setShowNummer(false)}>Done</IonButton>
              </IonItem>
            </div>
          </div>
        </IonCol>
      </IonGrid>
      <div className={betaal.container}>
        <h1 id={betaal.title}>Betaal methoden</h1>
        <Swiper slidesPerView={1}>
          {UserProfile[0].payment?.map((element) => {
            return (
              <SwiperSlide key={element.number}>
                <IonCard
                  className={betaal.Card}
                  style={{ backgroundColor: `${element.color}` }}
                >
                  <div id={betaal.cardIcons}>
                    <img id={betaal.sim} src={element.sim} />
                    <img id={betaal.wifi} src={element.simlogo} />
                  </div>

                  <img id={betaal.Logo} src={element.icon} />
                  <div className={betaal.CardInfo}>
                    <IonText id={betaal.name}>{element.name}</IonText>
                    <IonText id={betaal.cardNmb}>
                      **** **** **** **** {element.number}
                    </IonText>
                  </div>
                </IonCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

// const Gegevens: React.FC = () => {
//   return (
//     <div>
//       {Data?.map((element: any) => {
//         return (
//           <IonList>
//             <IonItem>
//               <IonIcon id={styles.AvatarIcon} icon={transgender} slot="start" />
//               <IonLabel>
//                 Geslacht
//                 <p id={styles.data}>{element.geslacht}</p>
//               </IonLabel>
//               <IonIcon id={styles.icon} icon={chevronForward} />
//             </IonItem>
//             <IonItem>
//               <IonIcon id={styles.AvatarIcon} icon={calendar} slot="start" />
//               <IonLabel>
//                 Geboortedatum
//                 <p id={styles.data}>{element.geboortedatum}</p>
//               </IonLabel>
//               <IonIcon id={styles.icon} icon={chevronForward} />
//             </IonItem>
//             <IonItem>
//               <IonIcon id={styles.AvatarIcon} icon={home} slot="start" />
//               <IonLabel>
//                 Address
//                 <p id={styles.data}>{element.address}</p>
//               </IonLabel>
//               <IonIcon id={styles.icon} icon={chevronForward} />
//             </IonItem>
//             <IonItem>
//               <IonIcon id={styles.AvatarIcon} icon={mail} slot="start" />
//               <IonLabel>
//                 Email
//                 <p id={styles.data}>{element.email}</p>
//               </IonLabel>
//               <IonIcon id={styles.icon} icon={chevronForward} />
//             </IonItem>
//             <IonItem>
//               <IonIcon id={styles.AvatarIcon} icon={call} slot="start" />
//               <IonLabel>
//                 Telefoonnummer
//                 <p id={styles.data}>{element.telefoonnummer}</p>
//               </IonLabel>
//               <IonIcon id={styles.icon} icon={chevronForward} />
//             </IonItem>
//           </IonList>
//         );
//       })}
//     </div>
//   );
// };

// export default Gegevens;
