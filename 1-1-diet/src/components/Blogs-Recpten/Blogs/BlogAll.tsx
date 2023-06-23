import React from "react";
import {
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonText,
  IonRouterLink,
  IonPage,
  IonContent,
} from "@ionic/react";
import { stopwatchOutline, heart, chevronBackOutline } from "ionicons/icons";
import styles from "./BlogAll.module.css";
import { Blogs } from "../data";
import BackButton from "../../BackButton";

export default function ReceptAll() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <BackButton />
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Blogs</h1>
        </div>
        <div className={styles.Container}>
          {Blogs?.map((blog) => {
            return (
              <IonRouterLink
                className={styles.unset}
                href={`/tabs/tab1/blog/${blog.id}`}
              >
                <div>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="3.5">
                        <img className={styles.image} src={blog.image} alt="" />
                      </IonCol>
                      <IonCol className={styles.col} size="8">
                        <IonCol>
                          <p>{blog.title}</p>
                        </IonCol>
                        <IonCol>
                          <IonRow>
                            <IonCol>
                              <p>{blog.date}</p>
                            </IonCol>
                          </IonRow>
                        </IonCol>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                  <hr />
                </div>
              </IonRouterLink>
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
}
