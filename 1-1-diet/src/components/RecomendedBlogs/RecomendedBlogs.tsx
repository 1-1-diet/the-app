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
      <Swiper slidesPerView={1.5} grabCursor={true}>
        {Blogs?.map((element: any) => {
          return (
            <SwiperSlide key={element.title}>
              <IonCard>
                <img
                  alt={element.title}
                  src={require(`../../Images/${element.img}`)}
                />
                <IonCardHeader>
                  <IonCardTitle>{element.title} </IonCardTitle>
                  <IonCardSubtitle>{element.readTime}</IonCardSubtitle>
                  <IonCardSubtitle>{element.date}</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RecomendedBlogs;
