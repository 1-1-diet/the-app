import { IonLabel, IonIcon } from "@ionic/react";
import styles from "./BgPtrn.module.css";
import ptrn from "../../Images/ptrnBlack.svg";

export default function BgPtrn() {
  return (
    <div className={styles.gradient}>
      <img
        id={styles.bgPtrn}
        src={ptrn}
        alt="Background image with food patron"
      />
    </div>
  );
}
