import React from "react";
import { IonCard, IonButton, IonText, IonContent } from "@ionic/react";
import styles from "./UitlegCard.module.css";
import { Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import "@ionic/react/css/ionic-swiper.css";
const Home: React.FC = () => {
  return (
    <Swiper
      slidesPerView={1.1}
      modules={[Pagination, Virtual]}
      pagination={{ clickable: true }}
      virtual
      className={styles.swiperbox}
    >
      <SwiperSlide className={styles.slidebox}>
        <IonCard className={styles.cardone}>
          <div className={styles.textbox}>
            <IonText className={styles.cardonetext}>
              Maak nu een account aan en ontdek de app van 1:1 dieet
            </IonText>
          </div>
          <div className={styles.gif} />
        </IonCard>
      </SwiperSlide>

      <SwiperSlide className={styles.slidebox}>
        <IonCard className={styles.cardtwo}>
          <div className={styles.textboxtwo}>
            <IonText className={styles.cardtwotext}>
              Maak nu een account aan en ontvang 20 euro op je eerste bestelling
            </IonText>
          </div>
          <IonButton className={styles.button}>Lees meer</IonButton>
        </IonCard>
      </SwiperSlide>
    </Swiper>
  );
};
export default Home;
