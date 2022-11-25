import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from "swiper";
import {
  IonText,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonContent,
  IonSlides,
  IonSlide,
} from "@ionic/react";
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
          <div className="slideStats">
            <IonGrid>
              <IonRow className="ion-margin">
                <IonCol className="ion-text-center">
                  <div>Resultaten van deze week</div>
                </IonCol>
              </IonRow>
              <IonRow className="ion-margin">
                <IonCol>
                  <div>
                    <p>Wat je bent verloren:</p>
                    <h1>-4kg</h1>
                    <p>Jij bent bij stap:</p>
                    <h1>2</h1>
                  </div>
                </IonCol>
                <IonCol className="ion-margin">
                  <div className="ion-margin">
                    <img src={Chart} alt={Chart} />
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideStats">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <div>graph</div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
