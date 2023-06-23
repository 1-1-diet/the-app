import React from "react";
import { IonCard, IonIcon, IonLabel, IonRouterLink } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./RecomendedBlogs.module.css";
import { book } from "ionicons/icons";
import { Blogs } from "../Blogs-Recpten/data";

const RecomendedBlogs: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.centerHeader}>
        <div className={styles.titleContent}>
          <h1 id={styles.title}>Aanbevolen blogs</h1>
          <IonRouterLink href="/tabs/BlogAll">
            <IonLabel id={styles.toonAlle}>Toon Alle</IonLabel>
          </IonRouterLink>
        </div>
      </div>
      <Swiper slidesPerView={1.2} grabCursor={true}>
        {Blogs?.map((element: any) => {
          return (
            <SwiperSlide key={element.title}>
              <IonRouterLink href={`/tabs/tab1/blog/${element.id}`}>
                <IonCard className={styles.BlogImg}>
                  <img
                    alt={element.title}
                    src={element.image}
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
              </IonRouterLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RecomendedBlogs;
