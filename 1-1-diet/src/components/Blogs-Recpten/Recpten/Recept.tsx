import React from "react";
import styles from "./Recept.module.css";
import { IonContent, IonIcon, IonPage, IonText } from "@ionic/react";
import { Recepten } from "../data";

import { timeOutline, heart, chevronDownOutline } from "ionicons/icons";
import BackButton from "../../BackButton";
import { useParams } from "react-router";

export const Recept = () => {
  const { receptId } = useParams<{ receptId: string }>();

  const recepten = Recepten.find((p) => p.id === receptId);

  if (recepten === undefined) {
    return <div>loading...</div>;
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <div key={recepten.id} className={styles.mainContainer}>
          <BackButton />
          <div className={styles.headerContainer}>
            <img src={recepten.image} alt="image" />
            <div className={styles.header__gradient}>
              <div className={styles.header__titleContainer}>
                <IonText id={styles.header__title}>{recepten.title}</IonText>
                <div className={styles.header__subContainer}>
                  <IonText id={styles.header__subTitle}>
                    <IonIcon icon={heart} />
                    {recepten.yummies} yummies
                  </IonText>
                  <IonText id={styles.header__subTitle}>
                    {recepten.bakeTime}
                    <IonIcon icon={timeOutline} />
                  </IonText>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainContent}>
            <div className={styles.tagsContainer}>
              {Recepten[recepten.recept].tags?.map((tag) => {
                return (
                  <div key={tag.icon} className={styles.tag}>
                    <IonIcon icon={tag.icon} />
                    {tag.title}
                  </div>
                );
              })}
            </div>
            <IonText className={styles.discription}>
              {recepten.discription}
            </IonText>
            <div className={styles.ingridientContainer}>
              <div className={styles.ingridient__header}>
                <h1>Ingridient</h1>
                <IonIcon icon={chevronDownOutline} />
              </div>
              <div className={styles.ingridient__itemContainer}>
                {Recepten[recepten.recept].ingridient?.map((indridient) => {
                  return (
                    <div
                      key={indridient.title}
                      className={styles.ingridient__item}
                    >
                      <div className={styles.ingridient__title}>
                        <img src={indridient.image} alt={indridient.title} />
                        <IonText>{indridient.title}</IonText>
                      </div>
                      <IonText>{indridient.wheight}</IonText>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
