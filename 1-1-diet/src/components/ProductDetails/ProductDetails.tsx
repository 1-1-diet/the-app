import React from "react";
import { IonButton, IonText, IonIcon } from "@ionic/react";
import styles from "./ProductDetails.module.css";
import {
  chevronBackOutline,
  bagHandleOutline,
  heart,
  flameOutline,
  removeOutline,
  addOutline,
} from "ionicons/icons";
import soep from "../../Images/soep.svg";

export default function ProductDetails() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <img id={styles.bgImg} src={soep} alt="Product soep" />
        <div className={styles.icons}>
          <IonIcon
            icon={chevronBackOutline}
            color="navigation"
            size="large"
            className={styles.navBtn}
          />
          <IonIcon
            icon={bagHandleOutline}
            color="navigation"
            size="large"
            className={styles.navBtn}
          />
        </div>
        <div className={styles.titleContainer}>
          <IonText id={styles.title} color="light">
            Soep
          </IonText>
          <div className={styles.likesContainer}>
            <IonIcon icon={heart} size="large" className={styles.navBtn} />
            <IonText id={styles.likes} color="light">
              + 150 Yummies
            </IonText>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.statContainer}>
          <div className={styles.stat}>
            <IonIcon icon={flameOutline} color="danger" />
            <IonText>80 kCal</IonText>
          </div>
          <div className={styles.stat}>
            <IonIcon icon={flameOutline} color="danger" />
            <IonText>80 kCal</IonText>
          </div>
          <div className={styles.stat}>
            <IonIcon icon={flameOutline} color="danger" />
            <IonText>80 kCal</IonText>
          </div>
          <div className={styles.stat}>
            <IonIcon icon={flameOutline} color="danger" />
            <IonText>80 kCal</IonText>
          </div>
        </div>
        <div className={styles.prijsContainer}>
          <div className={styles.amountContainer}>
            <IonButton
              className={styles.amountBtn}
              size="small"
              color="secondaryAccent"
            >
              <IonIcon className={styles.amountText} icon={removeOutline} />
            </IonButton>
            <IonText id={styles.amount}>1</IonText>
            <IonButton
              className={styles.amountBtn}
              size="small"
              color="secondary"
            >
              <IonIcon className={styles.amountText} icon={addOutline} />
            </IonButton>
          </div>
          <IonText id={styles.prijs}>€7,45</IonText>
          <IonText id={styles.tag}>Popular</IonText>
        </div>
        <div className={styles.desciptionContainer}>
          <IonText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            perferendis incidunt iste ea, exercitationem iusto nobis,
            necessitatibus magnam, sunt eaque facere illo assumenda nostrum cum
            autem fugit in nulla. At? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam architecto ducimus doloremque ut tempore
            assumenda nostrum beatae, repellendus nobis non laudantium quis
          </IonText>
        </div>
        <div className={styles.btnCotainer}>
          <IonButton id={styles.shoppingCard} color="secondary">
            <div className={styles.shoppingCardBtn}>
              Winkelmandje
              <IonIcon icon={bagHandleOutline} size="large" />
            </div>
          </IonButton>
          <IonButton id={styles.buyNow} color="navigation">
            Bestel nu
          </IonButton>
        </div>
      </div>
      <div className={styles.extra}></div>
    </div>
  );
}
