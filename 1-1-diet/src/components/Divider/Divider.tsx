import React from "react";
import { IonImg, IonItemDivider, IonLabel } from "@ionic/react";
import styles from "./Divider.module.css";
import { Img } from "@ionic/core/dist/types/components/img/img";
import devider from "../../Images/DividerLogo.png";

function Divider() {
  return <img alt="devider" src={devider} />;
}
export default Divider;
