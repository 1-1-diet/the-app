import React, { useState } from "react";
import { IonButton, IonLabel } from "@ionic/react";
import "swiper/css";
import styles from "./TipsVoorVandaag.module.css";
import ReceptCard from "./ReceptCard";
import { Recept } from "./recept";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TipsVoorVandaag() {
  const [page, setPage] = useState(1);

  return (
    <div className={styles.mainContent}>
      <div className={styles.centerHeader}>
        <div className={styles.headerContent}>
          <div className={styles.titleContent}>
            <IonLabel id={styles.title}>Tips van de week</IonLabel>
            <IonLabel id={styles.toonAlle}>Toon alle</IonLabel>
          </div>
          <div className={styles.btnContent}>
            {/* <div className={styles.btnSelector}></div> */}
            <IonButton
              className={styles.btn}
              color={page === 1 ? "navigation" : "background"}
              onClick={() => setPage(1)}
            >
              Ontbijt
            </IonButton>
            <IonButton
              className={styles.btn}
              color={page === 2 ? "navigation" : "background"}
              onClick={() => setPage(2)}
            >
              Lunch
            </IonButton>
            <IonButton
              className={styles.btn}
              color={page === 3 ? "navigation" : "background"}
              onClick={() => setPage(3)}
            >
              Diner
            </IonButton>
            <IonButton
              className={styles.btn}
              color={page === 4 ? "navigation" : "background"}
              onClick={() => setPage(4)}
            >
              Snack
            </IonButton>
          </div>
        </div>
      </div>
      <div className={styles.carrouselContent}>
        <Swiper slidesPerView={1.5} grabCursor={true} className={styles.swiper}>
          {Recept?.map((element) => {
            return (
              <SwiperSlide key={element.title}>
                <ReceptCard
                  title={element.title}
                  bakeTime={element.bakeTime}
                  yummies={element.yummies}
                  img={element.img}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
