import React from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonCard,
  IonText,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Gegevens.module.css";
import betaal from "./Betaalmethode.module.css";
import { chevronForward } from "ionicons/icons";
import { home } from "ionicons/icons";
import { mail } from "ionicons/icons";
import { call } from "ionicons/icons";
import { transgender } from "ionicons/icons";
import { calendar } from "ionicons/icons";
import { Data, CreditCard } from "./Data";

const Gegevens: React.FC = () => {
  return (
    <div>
      {Data?.map((element: any) => {
        return (
          <IonList>
            <IonItem>
              <IonIcon id={styles.AvatarIcon} icon={transgender} slot="start" />
              <IonLabel>
                Geslacht
                <p id={styles.data}>{element.geslacht}</p>
              </IonLabel>
              <IonIcon id={styles.icon} icon={chevronForward} />
            </IonItem>
            <IonItem>
              <IonIcon id={styles.AvatarIcon} icon={calendar} slot="start" />
              <IonLabel>
                Geboortedatum
                <p id={styles.data}>{element.geboortedatum}</p>
              </IonLabel>
              <IonIcon id={styles.icon} icon={chevronForward} />
            </IonItem>
            <IonItem>
              <IonIcon id={styles.AvatarIcon} icon={home} slot="start" />
              <IonLabel>
                Address
                <p id={styles.data}>{element.address}</p>
              </IonLabel>
              <IonIcon id={styles.icon} icon={chevronForward} />
            </IonItem>
            <IonItem>
              <IonIcon id={styles.AvatarIcon} icon={mail} slot="start" />
              <IonLabel>
                Email
                <p id={styles.data}>{element.email}</p>
              </IonLabel>
              <IonIcon id={styles.icon} icon={chevronForward} />
            </IonItem>
            <IonItem>
              <IonIcon id={styles.AvatarIcon} icon={call} slot="start" />
              <IonLabel>
                Telefoonnummer
                <p id={styles.data}>{element.telefoonnummer}</p>
              </IonLabel>
              <IonIcon id={styles.icon} icon={chevronForward} />
            </IonItem>
          </IonList>
        );
      })}
      <div className={betaal.container}>
        <h1 id={betaal.title}>Betaal methoden</h1>
        <Swiper slidesPerView={1}>
          {CreditCard?.map((element: any) => {
            return (
              <SwiperSlide>
                <IonCard
                  className={betaal.Card}
                  style={{ backgroundColor: `${element.color}` }}
                >
                  <img
                    id={betaal.Logo}
                    src={require(`../../../Images/Mastercard-logo.svg.png`)}
                  />
                  <div className={betaal.CardInfo}>
                    <IonText id={betaal.name}>{element.name}</IonText>
                    <IonText id={betaal.cardNmb}>{element.cardnumber}</IonText>
                  </div>
                </IonCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Gegevens;
