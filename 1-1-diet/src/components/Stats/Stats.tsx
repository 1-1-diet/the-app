import React from "react";
import { Pagination, Virtual } from "swiper";
import { IonText, IonGrid, IonRow, IonCol } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Stats.css";
import "swiper/css/pagination";
import Chart from "../Chart/Chart.svg";

export default function Stats() {
  return (
    <div>
      <Swiper
        modules={[Pagination, Virtual]}
        pagination={{ clickable: true }}
        virtual
        className="swiperDots"
      >
        <SwiperSlide>
          <IonGrid className="slideStats">
            <IonRow>
              <IonCol className="ion-text-center">
                <p className="statsTitle">Resultaten van deze week</p>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonText>
                  <p>Wat je bent verloren:</p>
                  <h1 className="statsText">-4kg</h1>
                  <p>Jij bent bij stap:</p>
                  <h1 className="statsText">2</h1>
                </IonText>
              </IonCol>
              <IonCol>
                <div>
                  <img src={Chart} alt={Chart}></img>
                </div>
                <div className="ion-text-center">
                  <p className="statsText">502Kcal</p>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </SwiperSlide>
        <SwiperSlide>
          <IonGrid className="slideStats">
            <IonRow>
              <IonCol>
                <div>graph</div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
