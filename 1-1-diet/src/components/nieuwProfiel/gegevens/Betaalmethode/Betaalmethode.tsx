import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonCard, IonLabel } from "@ionic/react";
import styles from "./Betaalmethode.module.css";
import { CreditCard } from "./CreditCard";

const Betaalmethode: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 id={styles.title}>Betaal methoden</h1>
      <Swiper slidesPerView={1}>
        {CreditCard?.map((element: any) => {
          return (
            <SwiperSlide>
              <IonCard
                className={styles.Card}
                style={{ backgroundColor: `${element.color}` }}
              >
                <img
                  id={styles.Logo}
                  src={require(`../../../../Images/Mastercard-logo.svg.png`)}
                />
                <div className={styles.CardInfo}>
                  <h5>{element.name}</h5>
                  <p>{element.cardnumber}</p>
                </div>
              </IonCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Betaalmethode;
