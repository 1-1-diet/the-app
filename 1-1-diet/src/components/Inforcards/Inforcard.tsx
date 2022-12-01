import React from "react";
import { IonCard, IonButton, IonText } from "@ionic/react";
import { Pagination, Virtual } from "swiper";
import styles from "./Infocard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Home: React.FC = () => {
  return (
    <Swiper
      modules={[Pagination, Virtual]}
      pagination={{ clickable: true }}
      virtual
      className={styles.swiper}
    >
      <SwiperSlide className={styles.center}>
        <div className={styles.cardone}>
          <div className={styles.logoone}></div>
          <div className={styles.textbox}>
            <IonText>
              <h5 className={styles.cardonetext}>
                Met The 1:1 Diet val je af en ga je naar een gezonde leefstijl,
                voor nu én later!
              </h5>
            </IonText>

            <IonButton className={styles.button} color="primary">
              Lees meer
            </IonButton>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.center}>
        <div className={styles.cardtwo}>
          <div className={styles.logotwo}></div>
          <div className={styles.textbox}>
            <IonText>
              <h5 className={styles.cardtwotext}>
                Al 25 jaar meer dan alleen een dieet! Ruim 1,2 miljoen cliënten
                gingen je voor.
              </h5>
            </IonText>

            <IonButton color="primary">Lees meer</IonButton>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Home;
