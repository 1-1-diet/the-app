import React from "react";
import { IonCard, IonIcon, IonLabel } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./ProductSwiper.module.css";
import { book } from "ionicons/icons";
import { ProductCard } from "./ProductCard";

const ProductSwiper: React.FC = () => {
  return (
    <div>
      <div className={styles.centerHeader}>
        <div className={styles.ComponentTitle}>
          <IonLabel id={styles.title}>Onze Producten</IonLabel>
          <IonLabel id={styles.toonAlle}>Toon Alle</IonLabel>
        </div>
      </div>
      <Swiper className={styles.swiper} slidesPerView={1.2} grabCursor={true}>
        {ProductCard?.map((element: any) => {
          return (
            <SwiperSlide key={element.title}>
              <IonCard className={styles.ProductSwip}>
                <img
                  alt={element.title}
                  src={require(`../../Images/${element.img}`)}
                  className={styles.ProImg}
                ></img>
                <IonLabel className={styles.ProText}>{element.title} </IonLabel>
              </IonCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
