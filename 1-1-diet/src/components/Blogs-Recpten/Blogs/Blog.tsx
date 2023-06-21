import React from "react";
import styles from "./Blog.module.css";
import { IonContent, IonIcon, IonPage, IonText } from "@ionic/react";
import { Blogs } from "../data";

import { heart } from "ionicons/icons";
import BackButton from "../../BackButton";

export default function Blog() {
  return (
    <IonPage>
      <IonContent fullscreen>
        {Blogs?.map((blog) => {
          return (
            <div className={styles.mainContainer}>
              <BackButton />
              <div className={styles.headerContainer}>
                <img src={blog.image} alt={blog.title} />
                <div className={styles.header__gradient}>
                  <div className={styles.header__titleContainer}>
                    <IonText id={styles.header__title}>{blog.title}</IonText>
                    <div className={styles.header__subContainer}>
                      <IonText id={styles.header__subTitle}>
                        <IonIcon icon={heart} />
                        {blog.yummies} yummies
                      </IonText>
                      <IonText id={styles.header__tag}>{blog.tag}</IonText>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainContent}>
                <IonText>{blog.discription}</IonText>
              </div>
            </div>
          );
        })}
      </IonContent>
    </IonPage>
  );
}
