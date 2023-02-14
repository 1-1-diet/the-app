import { IonLabel, IonIcon } from "@ionic/react";
import styles from "./Login.module.css";
import BgPtrn from "../Splashscreen/BgPtrn";
import klap from "../../Images/1to1girls.svg";

export default function SplashScreen() {
  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <img id={styles.klap} src={klap} alt="two girl giving a high 5" />
      </div>
    </div>
  );
}
