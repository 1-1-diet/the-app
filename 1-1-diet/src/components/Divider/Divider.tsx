import React from "react";
import { IonImg, IonItemDivider, IonLabel } from "@ionic/react";
import styles from "./Divider.module.css";

function Divider() {
  return (
    <IonItemDivider className={styles.dividerbox}>
      <IonImg className={styles.img} />
    </IonItemDivider>
  );
}
export default Divider;
