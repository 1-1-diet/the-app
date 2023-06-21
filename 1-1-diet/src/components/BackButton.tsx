import { IonIcon, IonRouterLink } from "@ionic/react";
import styles from "./BackButton.module.css";

import { chevronBackOutline } from "ionicons/icons";

export default function BackButton() {
  return (
    <IonRouterLink href="javascript:history.back()">
      <IonIcon icon={chevronBackOutline} id={styles.back} size="large" />
    </IonRouterLink>
  );
}
