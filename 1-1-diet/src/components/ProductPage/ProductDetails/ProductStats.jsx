import React from "react";
import styles from "./ProductDetails.module.css";
import { IonButton, IonText, IonIcon } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { stats } from "./stats";

export default function ProductStats() {
  return (
    <div>
      <div className={styles.statContainer}>
        <Swiper slidesPerView={"auto"} grabCursor={true} spaceBetween={10}>
          {stats?.map((element) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={element.title}>
                <div className={styles.stat}>
                  <IonIcon icon={element.icon} color={element.color} />
                  <IonText>{element.title}</IonText>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
