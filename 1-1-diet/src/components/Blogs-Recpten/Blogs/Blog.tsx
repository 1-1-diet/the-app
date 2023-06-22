import React from "react";
import styles from "./Blog.module.css";
import { IonContent, IonIcon, IonPage, IonText } from "@ionic/react";
import { Blogs } from "../data";

import { heart } from "ionicons/icons";
import BackButton from "../../BackButton";
import { useParams } from "react-router";
import RecomendedBlogs from "../../RecomendedBlogs/RecomendedBlogs";

export default function Blog() {
  const { blogId } = useParams<{ blogId: string }>();

  const blogs = Blogs.find((p) => p.id === blogId);

  if (blogs === undefined) {
    return <div>loading...</div>;
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.mainContainer}>
          <BackButton />
          <div className={styles.headerContainer}>
            <img src={blogs.image} alt={blogs.title} />
            <div className={styles.header__gradient}>
              <div className={styles.header__titleContainer}>
                <IonText id={styles.header__title}>{blogs.title}</IonText>
                <div className={styles.header__subContainer}>
                  <IonText id={styles.header__subTitle}>
                    <IonIcon icon={heart} />
                    {blogs.yummies} yummies
                  </IonText>
                  <IonText id={styles.header__tag}>{blogs.tag}</IonText>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainContent}>
            <div className={styles.center}>
              <IonText>{blogs.discription}</IonText>
            </div>
            <div className={styles.recommendContainer}>
              <RecomendedBlogs />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
