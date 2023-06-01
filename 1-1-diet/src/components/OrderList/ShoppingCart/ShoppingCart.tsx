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
import ptrn2 from "../images/orderBackground.svg";
import soep from "../images/soep.png";
import pannenkoek from "../images/pannenkoek.png";

type Product = {
  img: string;
  name: string;
  price: number;
  weight: string;
};

type Cart = Product[];
const products: Cart = [
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

function shoppingCartReducer(state: Product[], action: any) {
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

  function getTotal(cart: Cart) {
    return (
      Math.round(
        cart.reduce((totalCost, item) => totalCost + item.price, 0) * 100
      ) / 100
    );
  }

  function add(product: any) {
    const action = { product, type: "add" };
    setCart(action);
  }

  function remove(product: any) {
    const action = { product, type: "remove" };
    setCart(action);
  }

  const korting = -10;
  const verzendkosten = 5.95;

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
                    <IonItemSliding className={styles.itemSlider}>
                      <IonItem className={styles.slider}>
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
                            {product.price} €
                          </IonRow>
                        </IonCol>
                        <IonCol size="7">
                          <IonRow className="ion-justify-content-evenly">
                            <div className={styles.button}>
                              <IonButton
                                color="tertiary"
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
                        <IonItemOption className={styles.trash} color="primary">
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
            <div className={styles.orders}>
              <img src={ptrn2} alt="food ptrn" id={styles.headerptrn2} />
              <IonCol>
                <IonRow className="ion-justify-content-evenly">
                  <IonCol>
                    <p>Totaal</p>
                    <p>Verzendkosten</p>
                    <p>Korting</p>
                    <p>Totale bedrag</p>
                  </IonCol>
                  <IonCol className="ion-text-end">
                    <p>{cart.length}</p>
                    <p>{verzendkosten} €</p>
                    <p>{korting} €</p>
                    <p>
                      {Math.round(
                        (getTotal(cart) + korting + verzendkosten) * 100
                      ) / 100}{" "}
                      €
                    </p>
                  </IonCol>
                </IonRow>
                <IonCol>
                  <IonButton className={styles.orderConfirm} color="white-blue">
                    <p>Bestelling afronden</p>
                  </IonButton>
                </IonCol>
              </IonCol>
            </div>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
}
