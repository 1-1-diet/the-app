import { IonText, IonCol, IonGrid, IonImg } from "@ionic/react";

import styles from "./Done.module.css";
import BgPtrn from "../../components/Splashscreen/BgPtrn";
import logo from "../../Images/logo2.svg";
import done from "../../Images/done.svg";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Done(props: any) {
  const history = useHistory();

  const abc = (path: any) => {
    history.push(path);
  };

  useEffect(() => {
    setTimeout(() => {
      abc("/tabs/tab2");
    }, 5000);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <img className={styles.klap} id={styles.klap} src={logo} alt="logo" />
        <div>
          <IonGrid>
            <IonCol className={styles.completeContent}>
              <IonImg src={done} alt="check mark" />
              <div className={styles.titleCompleted}>
                <IonText>Het is gelukt</IonText>
              </div>
            </IonCol>
          </IonGrid>
        </div>
      </div>
    </div>
  );
}
