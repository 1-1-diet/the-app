import React from "react";
import { IonCard, IonIcon, IonLabel } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./RecomendedBlogs.module.css";
import { book } from "ionicons/icons";
import { Blogs } from "./Blogs";

const RecomendedBlogs: React.FC = () => {
  return (
    <div>
      <div className={styles.titleContent}>
        <IonLabel id={styles.title}>Aanbevolen blogs</IonLabel>
        <IonLabel id={styles.toonAlle}>Toon Alle</IonLabel>
      </div>
      <Swiper className={styles.swiper} slidesPerView={1.2} grabCursor={true}>
        {Blogs?.map((element: any) => {
          return (
            <SwiperSlide key={element.title}>
              <IonCard className={styles.BlogImg}>
                <img
                  alt={element.title}
                  src={require(`../../Images/${element.img}`)}
                  className={styles.img}
                />
                <div className={styles.BlogText}>
                  <IonLabel className={styles.titleContent}>
                    {element.title}
                  </IonLabel>
                  <div className={styles.Ptext}>
                    <p>{element.readTime}</p>
                    <IonIcon icon={book} />
                    <p>{element.date}</p>
                  </div>
                </div>
              </IonCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RecomendedBlogs;
