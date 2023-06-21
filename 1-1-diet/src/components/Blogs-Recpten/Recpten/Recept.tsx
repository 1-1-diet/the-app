import React from "react";
import styles from "./Recept.module.css";
import { IonContent, IonIcon, IonPage, IonText } from "@ionic/react";
import { Recepten } from "../data";

import { timeOutline, heart, chevronDownOutline } from "ionicons/icons";

export default function Recept() {
  return (
    <IonPage>
      <IonContent fullscreen>
        {Recepten?.map((recept) => {
          return (
            <div key={recept.id} className={styles.mainContainer}>
              <div className={styles.headerContainer}>
                <img src={recept.image} alt="image" />
                <div className={styles.header__gradient}>
                  <div className={styles.header__titleContainer}>
                    <IonText id={styles.header__title}>{recept.title}</IonText>
                    <div className={styles.header__subContainer}>
                      <IonText id={styles.header__subTitle}>
                        <IonIcon icon={heart} />
                        {recept.yummies} yummies
                      </IonText>
                      <IonText id={styles.header__subTitle}>
                        {recept.bakeTime}
                        <IonIcon icon={timeOutline} />
                      </IonText>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainContent}>
                <div className={styles.tagsContainer}>
                  {Recepten[recept.id].tags?.map((tag) => {
                    return (
                      <div key={tag.title} className={styles.tag}>
                        <IonIcon icon={tag.icon} />
                        {tag.title}
                      </div>
                    );
                  })}
                </div>
                <IonText className={styles.discription}>
                  {recept.discription}
                </IonText>
                <div className={styles.ingridientContainer}>
                  <div className={styles.ingridient__header}>
                    <h1>Ingridient</h1>
                    <IonIcon icon={chevronDownOutline} />
                  </div>
                  <div className={styles.ingridient__itemContainer}>
                    {Recepten[recept.id].ingridient?.map((indridient) => {
                      return (
                        <div
                          key={indridient.title}
                          className={styles.ingridient__item}
                        >
                          <div className={styles.ingridient__title}>
                            <img
                              src={indridient.image}
                              alt={indridient.title}
                            />
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
          );
        })}
      </IonContent>
    </IonPage>
  );
}
