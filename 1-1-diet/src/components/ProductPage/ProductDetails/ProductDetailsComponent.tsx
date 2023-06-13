import { IonButton, IonText, IonIcon } from "@ionic/react";
import styles from "./ProductDetails.module.css";
import {
  chevronBackOutline,
  bagHandleOutline,
  heart,
  removeOutline,
  addOutline,
} from "ionicons/icons";
import ProductStats from "./ProductStats";
import { card } from "./stats";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "../Product";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  return (
    <div className={styles.mainContainer}>
      {Product?.map((element: any) => {
        return (
          <div key={element.id}>
            <div className={styles.header}>
              <img
                id={styles.bgImg}
                src={require(`../../../Images/${element.img}`)}
                alt="Product soep"
              />
              <div className={styles.icons}>
                <IonIcon
                  icon={chevronBackOutline}
                  color="navigation"
                  size="large"
                  className={styles.navBtn}
                />

                <Link to="/tabs/OrderList">
                  <IonIcon
                    icon={bagHandleOutline}
                    color="navigation"
                    size="large"
                    className={styles.navBtn}
                  />
                </Link>
              </div>
              <div className={styles.titleContainer}>
                <IonText id={styles.title} color="light">
                  {element.title}
                </IonText>
                <div className={styles.likesContainer}>
                  <IonIcon
                    icon={heart}
                    size="large"
                    className={styles.navBtn}
                  />
                  <IonText id={styles.likes} color="light">
                    + {element.yummies} Yummies
                  </IonText>
                </div>
              </div>
            </div>
            <div className={styles.mainContent}>
              <ProductStats />
              <div className={styles.prijsContainer}>
                <div className={styles.amountContainer}>
                  <IonButton
                    className={styles.amountBtn}
                    size="small"
                    color="secondaryAccent"
                  >
                    <IonIcon
                      className={styles.amountText}
                      icon={removeOutline}
                    />
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
                <IonText id={styles.prijs}>{element.price}</IonText>
                <IonText id={styles.tag}>Popular</IonText>
              </div>
              <div className={styles.desciptionContainer}>
                <IonText>{element.description}</IonText>
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
          </div>
        );
      })}

      <div className={styles.extra}>
        <IonText id={styles.extraTitle}>Aanbevolen producten</IonText>
        <Swiper slidesPerView={"auto"} grabCursor={true} spaceBetween={10}>
          {card?.map((element: any) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={element.title}>
                <div className={styles.cardContainer}>
                  <img
                    src={require(`../../../Images/${element.img}.png`)}
                    alt="Product"
                    className={styles.cardImg}
                  />
                  <div className={styles.cardText}>
                    <IonText id={styles.cardTitle}>{element.title}</IonText>
                    <IonText id={styles.cardSub}>{element.subTitle}</IonText>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
