import React from "react";
import { Pagination, Virtual } from "swiper";
import { IonText, IonGrid, IonRow, IonCol } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Stats.module.css";
import "swiper/css/pagination";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

export default function Stats() {
  const data = {
    labals: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Weightlost",
        data: [18, 9],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Swiper
        modules={[Pagination, Virtual]}
        pagination={{ clickable: true }}
        virtual
        className={styles.swiperDots}
      >
        <SwiperSlide>
          <IonGrid className={styles.slideStats}>
            <IonRow>
              <IonCol className="ion-text-center">
                <p className={styles.statsTitle}>Resultaten van deze week</p>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonText>
                  <p>Wat je bent verloren:</p>
                  <h1 className={styles.statsText}>-4kg</h1>
                  <p>Jij bent bij stap:</p>
                  <h1 className={styles.statsText}>2</h1>
                </IonText>
              </IonCol>
              <IonCol>
                <div>
                  <Doughnut data={data} />
                </div>
                <div className="ion-text-center">
                  <p className={styles.statsText}>502Kcal</p>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </SwiperSlide>
        <SwiperSlide>
          <IonGrid className={styles.slideStats}>
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
