import { useState, useMemo } from "react";
import { IonButton, IonLabel } from "@ionic/react";
import "swiper/css";
import styles from "./TipsVoorVandaag.module.css";
import ReceptCard from "./ReceptCard";
import { Recept } from "./recept";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TipsVoorVandaag() {
  const [page, setPage] = useState(1);
  const [filteredOption, setFilteredOption] = useState("ontbijt");

  const filteredRecipes = useMemo(() => {
    return Recept.filter((recipe) => {
      return recipe.time === filteredOption;
    });
  }, [filteredOption]);

  const buttons = [
    { title: "Ontbijt", value: "ontbijt", page: 1 },
    { title: "Lunch", value: "lunch", page: 2 },
    { title: "Diner", value: "diner", page: 3 },
    { title: "Snack", value: "snack", page: 4 },
  ];

  return (
    <div className={styles.mainContent}>
      <div className={styles.centerHeader}>
        <div className={styles.headerContent}>
          <div className={styles.titleContent}>
            <IonLabel id={styles.title}>Tips van de week</IonLabel>
            <IonLabel id={styles.toonAlle}>Toon alle</IonLabel>
          </div>
          <div className={styles.btnContent}>
            {buttons.map((button) => {
              return (
                <IonButton
                  key={button.title}
                  className={styles.btn}
                  color={page === button.page ? "navigation" : "background"}
                  onClick={() => {
                    setPage(button.page);
                    setFilteredOption(button.value);
                  }}
                >
                  {button.title}
                </IonButton>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.carrouselContent}>
        <Swiper slidesPerView={1.5} grabCursor={true} className={styles.swiper}>
          {filteredRecipes.map((element) => {
            return (
              <SwiperSlide key={element.title} className={styles.swiperSlide}>
                <ReceptCard
                  title={element.title}
                  bakeTime={element.bakeTime}
                  yummies={element.yummies}
                  img={element.img}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
