import React, { useReducer } from "react";
import styles from "./ShoppingCart.module.css";
import {
  IonGrid,
  IonCol,
  IonItem,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonRow,
  IonPage,
  IonContent,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { trashBin, addOutline, removeOutline } from "ionicons/icons";
import ptrn from "../../../Images/BACKGROUND 2.svg";
import soep from "../images/soep.png";
import pannenkoek from "../images/pannenkoek.png";

const products = [
  {
    img: soep,
    name: "soep",
    price: 3.5,
    weight: "300g",
  },
  {
    img: pannenkoek,
    name: "pannenkoek",
    price: 3.95,
    weight: "300g",
  },
];

function getTotal(cart: any) {
  return (
    Math.round(
      cart.reduce((totalCost: any, item: any) => totalCost + item.price, 0) *
        100
    ) / 100
  );
}

function shoppingCartReducer(state: any, action: any) {
  switch (action.type) {
    case "add":
      return [...state, action.product];
    case "remove":
      const productIndex = state.findIndex(
        (item: any) => item.name === action.product.name
      );
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;
    default:
      return state;
  }
}

function getTotalSelectedAmountPerProduct(cart: any, productName: any) {
  return cart.filter((item: any) => item.name === productName).length;
}

export default function Product() {
  const [cart, setCart] = useReducer(shoppingCartReducer, []);

  function add(product: any) {
    const action = { product, type: "add" };
    setCart(action);
  }

  function remove(product: any) {
    const action = { product, type: "remove" };
    setCart(action);
  }

  return (
    <IonPage className={styles.page}>
      <IonContent fullscreen>
        <div>
          <img src={ptrn} alt="food ptrn" id={styles.headerptrn} />
          <div className={styles.content}>
            <IonGrid>
              <IonCol>
                <h1>Bestelling details</h1>
              </IonCol>
              <div className={styles.chat}>
                {products.map((product) => (
                  <div key={product.name} className={styles.products}>
                    <IonItemSliding>
                      <IonItem>
                        <IonCol size="3">
                          <img
                            className={styles.image}
                            src={product.img}
                            alt=""
                          />
                        </IonCol>
                        <IonCol size="3">
                          <IonRow>
                            <p className={styles.product}>{product.name}</p>
                            <p>{product.weight}</p>
                          </IonRow>
                          <IonRow className={styles.price}>
                            {product.price}€
                          </IonRow>
                        </IonCol>
                        <IonCol size="7">
                          <IonRow className="ion-justify-content-evenly">
                            <div className={styles.button}>
                              <IonButton
                                color="secondary"
                                onClick={() => remove(product)}
                              >
                                <IonIcon
                                  slot="icon-only"
                                  icon={removeOutline}
                                />
                              </IonButton>
                              <p className={styles.count}>
                                {getTotalSelectedAmountPerProduct(
                                  cart,
                                  product.name
                                )}
                              </p>
                              <IonButton
                                color="secondary"
                                onClick={() => add(product)}
                              >
                                <IonIcon slot="icon-only" icon={addOutline} />
                              </IonButton>
                            </div>
                          </IonRow>
                        </IonCol>
                      </IonItem>
                      <IonItemOptions>
                        <IonItemOption color="primary">
                          <IonIcon slot="icon-only" icon={trashBin}></IonIcon>
                        </IonItemOption>
                      </IonItemOptions>
                    </IonItemSliding>
                  </div>
                ))}
              </div>
            </IonGrid>
          </div>
          <IonGrid>
            <IonCol>
              <IonRow>
                <IonCol>Totaal</IonCol>
                <IonCol>{cart.length}</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Verzendkosten</IonCol>
                <IonCol>10</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Korting</IonCol>
                <IonCol>10</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Totale bedrag</IonCol>
                <IonCol>{getTotal(cart)}</IonCol>
              </IonRow>
              <IonCol>
                <IonButton>Bestelling afronden</IonButton>
              </IonCol>
            </IonCol>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
}
