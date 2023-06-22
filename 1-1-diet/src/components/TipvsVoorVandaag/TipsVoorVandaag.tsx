import { useState, useMemo } from "react";
import { IonButton, IonLabel, IonText } from "@ionic/react";
import "swiper/css";
import styles from "./TipsVoorVandaag.module.css";
import ReceptCard from "./ReceptCard";
import { Recept } from "./recept";
import { Recepten } from "../Blogs-Recpten/data";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TipsVoorVandaag() {
  const [filteredOption, setFilteredOption] = useState("ontbijt");
  const [cat, setCat] = useState("ontbijt");

  const filteredRecipes = useMemo(() => {
    return Recepten.filter((recipe) => {
      return recipe.time === filteredOption;
    });
  }, [filteredOption]);

  const nCat = [
    { title: "Ontbijt", set: "ontbijt" },
    { title: "Lunch", set: "lunch" },
    { title: "Diner", set: "diner" },
    { title: "Snack", set: "snack" },
  ];

  return (
    <div className={styles.mainContent}>
      <div className={styles.centerHeader}>
        <div className={styles.headerContent}>
          <div className={styles.titleContent}>
            <h1 id={styles.title}>Tips van de week</h1>
            <IonLabel id={styles.toonAlle}>Toon alle</IonLabel>
          </div>
          <Swiper
            className={styles.catContainer}
            slidesPerView={"auto"}
            grabCursor={true}
            spaceBetween={10}
          >
            {nCat?.map((element) => {
              return (
                <SwiperSlide
                  key={element.title}
                  className={styles.btnContainer}
                  onClick={() => {
                    setCat(element.title);
                    setFilteredOption(element.set);
                  }}
                  style={
                    cat === element.title
                      ? { borderBottom: "0.1em solid #5c9ad0" }
                      : { borderBottom: "0.1em solid #5c9ad000" }
                  }
                >
                  <IonText id={styles.catTitle}>{element.title}</IonText>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className={styles.carrouselContent}>
        <Swiper slidesPerView={1.5} grabCursor={true} className={styles.swiper}>
          {filteredRecipes.map((element) => {
            return (
              <SwiperSlide key={element.id} className={styles.swiperSlide}>
                <ReceptCard
                  id={element.id}
                  title={element.title}
                  bakeTime={element.bakeTime}
                  yummies={element.yummies}
                  img={element.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
