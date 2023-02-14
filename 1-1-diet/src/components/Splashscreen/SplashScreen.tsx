import { IonLabel, IonIcon } from "@ionic/react";
import styles from "./SplashScreen.module.css";
import BgPtrn from "./BgPtrn";
import logo from "../../Images/mobileLogo.svg";
import klap from "../../Images/1to1girls.svg";

export default function SplashScreen() {
  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <img id={styles.klap} src={klap} alt="two girl giving a high 5" />
        <img id={styles.logo} src={logo} alt="logo 1:1 dieet" />
      </div>
    </div>
  );
}
