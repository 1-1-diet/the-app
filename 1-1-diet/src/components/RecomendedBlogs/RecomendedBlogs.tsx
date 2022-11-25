import React, { Component } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./RecomendedBlogs.css";

import { Blogs } from "./Blogs";

const RecomendedBlogs: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Hello world?</h1>
      </div>
      <Swiper slidesPerView={1.3} grabCursor={true}>
        {Blogs?.map((element: any) => {
          return (
            <SwiperSlide key={element.title}>
              <IonCard className="BlogImg">
                <img
                  alt={element.title}
                  src={require(`../../Images/${element.img}`)}
                />
                <div className="BlogText">
                  <p>{element.title} </p>
                  <div className="Ptext">
                    <p>{element.readTime}</p>
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
