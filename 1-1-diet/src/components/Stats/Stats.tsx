import React from "react";
import { Pagination, Virtual } from "swiper";
import { IonText, IonGrid, IonRow, IonCol } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Stats.module.css";
import "swiper/css/pagination";
import {
  Chart,
  ArcElement,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

Chart.register(ArcElement);

const randomNumber = Math.floor(Math.random() * 11);

const randomNumber2 = Math.floor(Math.random() * 101);

const randomNumber3 = Math.floor(Math.random() * 1001);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      min: -30,
      max: 30,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Wekelijkse gewichts afname",
    },
  },
};

const labels = [
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
  "Zondag",
];

const data2 = {
  labels,
  datasets: [
    {
      label: "Gewenste afname",
      data: [-5, 5, -3, -5, 7, 8, -5],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Daadwerkelijke afname",
      data: [3, -5, 6, 4, -8, 3, 5],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const data = {
  labals: ["Red", "Blue"],
  datasets: [
    {
      label: "# of Weightlost",
      data: [randomNumber2, randomNumber],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 2,
    },
  ],
};

export default function Stats() {
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
                  <h1 className={styles.statsText}>{randomNumber}kg</h1>
                  <p>Jij bent bij stap:</p>
                  <h1 className={styles.statsText}>2</h1>
                </IonText>
              </IonCol>
              <IonCol>
                <div>
                  <Doughnut data={data} />
                </div>
                <div className="ion-text-center">
                  <p className={styles.statsText}>{randomNumber3}Kcal</p>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </SwiperSlide>
        <SwiperSlide>
          <IonGrid className={styles.slideStats}>
            <IonCol>
              <div className={styles.lineChart}>
                <Line options={options} data={data2} />
              </div>
            </IonCol>
          </IonGrid>
        </SwiperSlide>
        <SwiperSlide>
          <IonGrid className={styles.slideStats}>
            <IonCol>
              <div className={styles.lineChart}>
                <Bar options={options} data={data2} />
              </div>
            </IonCol>
          </IonGrid>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
