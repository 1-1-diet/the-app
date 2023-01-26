import { useState, useMemo } from "react";
import {
  IonCard,
  IonCol,
  IonGrid,
  IonRow,
  IonLabel,
  IonContent,
  IonButton,
  IonText,
  IonModal,
  IonSearchbar,
  IonIcon,
  IonItem,
  IonCheckbox,
} from "@ionic/react";
import styles from "./ProductSearch.module.css";
import { Product } from "../Product";
import { optionsOutline, cartOutline } from "ionicons/icons";
import { Filter } from "../SearchPage/Search";
import { nCat } from "../../../components/ProductPage/Product";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductSearch: React.FC = () => {
  const [catOption, setCatOption] = useState("");
  const [cat, setCat] = useState("Alle");

  const filterdProduct = useMemo(() => {
    return Product.filter((product) => {
      return product.cat.includes(catOption);
    });
  }, [catOption]);

  return (
    <div className={styles.mainContainer}>
      <IonGrid>
        <IonRow>
          <IonCol size="10">
            <IonText>
              <h1>Vind jouw favoriete maaltijd!</h1>
            </IonText>
          </IonCol>
          <IonCol className={styles.cart}>
            <IonIcon icon={cartOutline} size="large" color="primary"></IonIcon>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCol size="10">
            <IonSearchbar placeholder="Wat wilt u bestellen?" />
          </IonCol>
          <IonCol size="2">
            <IonButton id="open-modal" expand="block" fill="clear">
              <IonIcon icon={optionsOutline} size="medium" color="secondary" />
            </IonButton>
            <IonModal
              trigger="open-modal"
              initialBreakpoint={0.25}
              breakpoints={[0, 0.25, 0.5, 0.75]}
              handleBehavior="cycle"
            >
              <IonContent className="ion-padding">
                <div className="ion-margin-top">
                  <IonGrid>
                    <IonRow className={styles.filter}>
                      <IonCol>Categorieen:</IonCol>
                      <IonCol>Allergieen:</IonCol>
                    </IonRow>
                    <IonRow>
                      {Filter?.map((element: any) => {
                        return (
                          <IonCol size="6" key={element.title}>
                            <IonItem>
                              <IonCheckbox
                                color={element.color}
                                slot="start"
                              ></IonCheckbox>
                              <IonLabel>{element.title}</IonLabel>
                            </IonItem>
                          </IonCol>
                        );
                      })}
                    </IonRow>
                  </IonGrid>
                </div>
              </IonContent>
            </IonModal>
          </IonCol>
          <IonCol>
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
                      setCatOption(element.set);
                      setCat(element.title);
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
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          {filterdProduct?.map((element: any) => {
            return (
              <IonCol size="6" key={element.id} className={styles.col}>
                <IonCard
                  className={styles.Cardstyle}
                  color="light"
                  href={`/tab4/${element.id}`}
                >
                  <img
                    alt={element.title}
                    src={require(`../../../Images/${element.img}`)}
                    className={styles.img}
                  />
                  <div className={styles.CardContent}>
                    <div className={styles.cardTitle}>
                      <IonText id={styles.Title}>{element.title}</IonText>
                    </div>
                    <div className={styles.cardDiscription}>
                      <div className={styles.productInfo}>
                        <IonText id={styles.Grams}>{element.gram}</IonText>
                        <IonText id={styles.Price}>{element.price}</IonText>
                      </div>
                      <div className={styles.Button}>
                        <IonButton color="secondary">
                          <IonText id={styles.ButtonText}>+</IonText>
                        </IonButton>
                      </div>
                    </div>
                  </div>
                </IonCard>
              </IonCol>
            );
          })}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default ProductSearch;

{
  /* <div className={styles.CardText}>
<div id={styles.TitleGram}>
  <IonText id={styles.Title}>{element.title}</IonText>
  <IonText id={styles.Grams}>{element.gram}</IonText>
</div>
<IonText id={styles.Price}>{element.price}</IonText>
</div>
<div className={styles.Button}>
<IonButton color="secondary">
  <IonText id={styles.ButtonText}>+</IonText>
</IonButton>
</div> */
}
