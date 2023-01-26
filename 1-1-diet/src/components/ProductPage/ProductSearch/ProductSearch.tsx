import {
  IonCard,
  IonCol,
  IonGrid,
  IonRow,
  IonLabel,
  IonContent,
  IonButton,
  IonText,
  IonRouterLink,
} from "@ionic/react";
import styles from "./ProductSearch.module.css";
import { Product } from "../Product";
import { Link } from "react-router-dom";

const ProductSearch: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <IonGrid>
        <IonRow>
          {Product?.map((element) => {
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
