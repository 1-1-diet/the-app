import {
  IonText,
  IonCol,
  IonGrid,
  IonImg,
  IonPage,
  IonContent,
} from "@ionic/react";

import styles from "./Done.module.css";
import BgPtrn from "../../components/Splashscreen/BgPtrn";
import logo from "../../Images/logo2.svg";
import done from "../../Images/done.svg";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Done(props: any) {
  const history = useHistory();

  const push = (path: any) => {
    history.push(path);
  };

  useEffect(() => {
    setTimeout(() => {
      push("/tabs/tab2");
    }, 5000);
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.mainContainer}>
          <BgPtrn />
          <div className={styles.mainContent}>
            <img
              className={styles.klap}
              id={styles.klap}
              src={logo}
              alt="logo"
            />
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
      </IonContent>
    </IonPage>
  );
}
