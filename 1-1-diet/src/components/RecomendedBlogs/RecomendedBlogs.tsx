import React, { Component } from "react";
import { IonCard, IonIcon, IonLabel } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./RecomendedBlogs.css";
import { book } from "ionicons/icons";

import { Blogs } from "./Blogs";

const RecomendedBlogs: React.FC = () => {
  return (
    <div>
      <div className="titleContent">
        <h1 id="Title">Aanbevolen blogs</h1>
        <IonLabel id="toonAlle">Toon Alle</IonLabel>
      </div>
      <Swiper className="swiper" slidesPerView={1.2} grabCursor={true}>
        {Blogs?.map((element: any) => {
          return (
            <SwiperSlide key={element.title}>
              <IonCard className="BlogImg">
                <img
                  alt={element.title}
                  src={require(`../../Images/${element.img}`)}
                />
                <div className="BlogText">
                  <IonLabel className="titleContent">{element.title} </IonLabel>
                  <div className="Ptext">
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
