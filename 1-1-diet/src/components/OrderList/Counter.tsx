import { useState } from "react";
import { IonIcon, IonButton } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";
import styles from "./OrderList.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div>
      <div className={styles.button}>
        <IonButton color="secondary" onClick={decrement}>
          <IonIcon slot="icon-only" icon={removeOutline} />
        </IonButton>
        <p className={styles.count}>{count}</p>
        <IonButton color="secondary" onClick={increment}>
          <IonIcon slot="icon-only" icon={addOutline} />
        </IonButton>
      </div>
    </div>
  );
}
