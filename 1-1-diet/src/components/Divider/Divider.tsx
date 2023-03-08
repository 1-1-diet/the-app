import React from "react";
import { IonImg, IonItemDivider, IonLabel } from "@ionic/react";
import styles from "./Divider.module.css";
import devider from "../../Images/DividerLogo.png";

function Divider() {
  return <img id={styles.img} src={devider} alt="devider" />;
}
export default Divider;
