import { IonButton, IonLabel } from "@ionic/react";
import styles from "./TipsVoorVandaag.module.css";
import ReceptCard from "./ReceptCard";
import { Recept } from "./recept";

export default function TipsVoorVandaag() {
  function setLeft(left: any) {
    document.documentElement.style.setProperty("--position-change", left);
  }

  interface Recept {
    title: string;
    bakeTime: string;
    yummies: string;
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.centerHeader}>
        <div className={styles.headerContent}>
          <div className={styles.titleContent}>
            <IonLabel id={styles.title}>Tip voor vandaag</IonLabel>
            <IonLabel id={styles.toonAlle}>Toon alle</IonLabel>
          </div>
          <div className={styles.btnContent}>
            <div className={styles.btnSelector}></div>
            <IonButton fill="clear" onClick={() => setLeft("1.3em")}>
              Ontbijt
            </IonButton>
            <IonButton fill="clear" onClick={() => setLeft("7.3em")}>
              Lunch
            </IonButton>
            <IonButton fill="clear" onClick={() => setLeft("13.2em")}>
              Diner
            </IonButton>
            <IonButton fill="clear" onClick={() => setLeft("19.1em")}>
              Snack
            </IonButton>
          </div>
        </div>
      </div>
      <div className={styles.carrouselContent}>
        {Recept?.map((element) => {
          return (
            <ReceptCard
              title={element.title}
              bakeTime={element.bakeTime}
              yummies={element.yummies}
            />
          );
        })}
      </div>
    </div>
  );
}
