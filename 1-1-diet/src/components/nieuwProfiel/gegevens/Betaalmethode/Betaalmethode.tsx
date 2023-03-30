import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonCard, IonLabel } from "@ionic/react";
import styles from "./Betaalmethode.module.css";
import { CreditCard } from "./CreditCard";

const Betaalmethode: React.FC = () => {
  return (
    <div className={styles.container}>
      <IonLabel id={styles.title}>Betaal methoden</IonLabel>
      <Swiper id={styles.swiper}>
        <SwiperSlide>
          <IonCard id={styles.CardOne}>
            <img
              id={styles.Logo}
              src={require(`../../../../Images/Mastercard-logo.svg.png`)}
            />
            {CreditCard?.map((element: any) => {
              return (
                <div id={styles.CardInfo}>
                  <h5>{element.name}</h5>
                  <p>{element.cardnumber}</p>
                </div>
              );
            })}
          </IonCard>
        </SwiperSlide>

        <SwiperSlide>
          <IonCard id={styles.CardTwo}>
            <img
              id={styles.Logo}
              src={require(`../../../../Images/Mastercard-logo.svg.png`)}
              className={styles.img}
            />
            {CreditCard?.map((element: any) => {
              return (
                <div id={styles.CardInfo}>
                  <h5>{element.name2}</h5>
                  <p>{element.cardnumber2}</p>
                </div>
              );
            })}
          </IonCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Betaalmethode;
