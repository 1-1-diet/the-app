import React from "react";
import {
  IonGrid,
  IonText,
  IonCol,
  IonRow,
  IonIcon,
  IonCard,
} from "@ionic/react";
import styles from "./Gegevens.module.css";
import betaal from "./Betaalmethode.module.css";
import { Settings, CreditCard } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Instellingen() {
  return (
    <div>
      <IonGrid>
        <IonCol className={styles.center}>
          {Settings?.map((element: any) => {
            return (
              <div className={styles.row} key={element.title}>
                <IonRow>
                  <IonIcon icon={element.icon} size="large" color="secondary" />
                  <IonText className={styles.info}>{element.title}</IonText>
                </IonRow>
                <IonRow>
                  <IonText className={styles.data}>{element.gegevens}</IonText>
                  <IonIcon icon={element.icon2} size="large" />
                </IonRow>
              </div>
            );
          })}
        </IonCol>
      </IonGrid>
      <div className={betaal.container}>
        <h1 id={betaal.title}>Betaal methoden</h1>
        <Swiper slidesPerView={1}>
          {CreditCard?.map((element: any) => {
            return (
              <SwiperSlide key={element.cardnumber}>
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
