import { useParams } from "react-router-dom";
import {
  IonButton,
  IonText,
  IonIcon,
  IonRouterLink,
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonInput,
} from "@ionic/react";
import styles from "../../components/ProductPage/ProductDetails/ProductDetails.module.css";
import {
  chevronBackOutline,
  bagHandleOutline,
  heart,
  removeOutline,
  addOutline,
} from "ionicons/icons";
import ProductStats from "../../components/ProductPage/ProductDetails/ProductStats";
import { card } from "../../components/ProductPage/ProductDetails/stats";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "../../components/ProductPage/Product";
import { useState } from "react";

export const ProductDetails = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(function (prevCount) {
      if (prevCount < 10) {
        return (prevCount += 1);
      } else {
        return (prevCount = 10);
      }
    });
  };

  const decrement = () => {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  };

  const [added, setAdded] = useState("siliciumweg 12a");
  const [showAdded, setShowAdded] = useState(false);
  const toggleShowAdded = () => {
    setShowAdded(!showAdded);
  };

  const { productId } = useParams<{ productId: string }>();

  const product = Product.find((p) => p.id === productId);

  if (product === undefined) {
    return <div>loading...</div>;
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.mainContainer}>
          <div key={product.id}>
            <div className={styles.header}>
              <img
                id={styles.bgImg}
                src={require(`../../Images/${product.img}`)}
                alt="Product soep"
              />
              <div className={styles.icons}>
                <IonRouterLink routerLink="/tabs/tab4">
                  <IonIcon
                    icon={chevronBackOutline}
                    color="navigation"
                    size="large"
                    className={styles.navBtn}
                  />
                </IonRouterLink>
                <IonRouterLink routerLink="/tabs/OrderList">
                  <IonIcon
                    icon={bagHandleOutline}
                    color="navigation"
                    size="large"
                    className={styles.navBtn}
                  />
                </IonRouterLink>
              </div>
              <div className={styles.titleContainer}>
                <IonText id={styles.title} color="light">
                  {product.title}
                </IonText>
                <div className={styles.likesContainer}>
                  <IonIcon
                    icon={heart}
                    size="large"
                    className={styles.navBtn}
                  />
                  <IonText id={styles.likes} color="light">
                    + {product.yummies} Yummies
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
                    onClick={decrement}
                  >
                    <IonIcon
                      className={styles.amountText}
                      icon={removeOutline}
                    />
                  </IonButton>
                  <IonText id={styles.amount}>{count}</IonText>
                  <IonButton
                    className={styles.amountBtn}
                    size="small"
                    color="secondary"
                    onClick={increment}
                  >
                    <IonIcon className={styles.amountText} icon={addOutline} />
                  </IonButton>
                </div>
                <IonText id={styles.prijs}>{product.price}</IonText>
                <IonText id={styles.tag}>Popular</IonText>
              </div>
              <div className={styles.desciptionContainer}>
                <IonText>{product.description}</IonText>
              </div>
              <div className={styles.btnCotainer}>
                <IonButton
                  onClick={toggleShowAdded}
                  id={styles.shoppingCard}
                  color="secondary"
                >
                  <div className={styles.shoppingCardBtn}>
                    Winkelmandje
                    <IonIcon icon={bagHandleOutline} size="large" />
                  </div>
                </IonButton>
                <IonButton
                  href="/tabs/OrderList/Finish"
                  id={styles.buyNow}
                  color="navigation"
                >
                  Snel bestellen
                </IonButton>
              </div>
            </div>
            <div
              id={showAdded ? `` : `${styles.hide}`}
              className={styles.backgroundBlur}
            >
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle color="secondary">
                    <h1>
                      {product.title} is succesvol toegevoegd aan je
                      Winkelmandje
                    </h1>
                  </IonCardTitle>
                </IonCardHeader>
                <IonButton
                  color="primary"
                  fill="clear"
                  onClick={() => setShowAdded(false)}
                  href="/tabs/OrderList/Finish"
                >
                  Bestel nu
                </IonButton>
                <IonButton
                  color="secondary"
                  fill="solid"
                  onClick={() => setShowAdded(false)}
                  href="/tabs/tab4"
                >
                  Winkel verder
                </IonButton>
              </IonCard>
            </div>
          </div>
          {/* <div className={styles.extra}>
            <IonText id={styles.extraTitle}>Aanbevolen producten</IonText>
            <Swiper slidesPerView={"auto"} grabCursor={true} spaceBetween={10}>
              {card?.map((element: any) => {
                return (
                  <SwiperSlide
                    className={styles.swiperSlide}
                    key={element.title}
                  >
                    <div className={styles.cardContainer}>
                      <img
                        src={require(`../../../Images/${element.img}.png`)}
                        alt="Product"
                        className={styles.cardImg}
                      />
                      <div className={styles.cardText}>
                        <IonText id={styles.cardTitle}>{element.title}</IonText>
                        <IonText id={styles.cardSub}>
                          {element.subTitle}
                        </IonText>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div> */}
        </div>
      </IonContent>
    </IonPage>
  );
};
