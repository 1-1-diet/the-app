import React, { useState } from "react";
import {
  IonCheckbox,
  IonText,
  IonInput,
  IonButton,
  IonIcon,
  IonNote,
  IonItem,
} from "@ionic/react";
import styles from "./FillEmailIn.module.css";
import "../../pages/Tab4.css";
import BgPtrn from "../../Splashscreen/BgPtrn";
import klap from "../../../Images/1to1girls.svg";
import { mailOutline } from "ionicons/icons";

export default function FillEmailIn() {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === "") return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <div className={styles.inputFieldContainer}>
          <div className={styles.top}>
            <img id={styles.klap} src={klap} alt="two girl giving a high 5" />
            <IonText id={styles.title}>Wat is jouw email</IonText>
          </div>
          <div className={styles.inputFields}>
            <div className={styles.inputContainer}>
              <IonIcon icon={mailOutline} color="secondary" size="large" />
              <IonItem
                className={`${isValid && "ion-valid"} ${
                  isValid === false && "ion-invalid"
                } ${isTouched && "ion-touched"}`}
                id={styles.input}
              >
                <IonInput
                  placeholder="Email"
                  type="email"
                  onIonInput={(event) => validate(event)}
                  onIonBlur={() => markTouched()}
                />
                <IonNote slot="helper">Voer een geldig email adress in</IonNote>
                <IonNote slot="error">Dit is geen gelidig email adress</IonNote>
              </IonItem>
            </div>
          </div>
        </div>
        <IonButton id={styles.button} color="secondary">
          <IonText id={styles.btnText}>Volgende</IonText>
        </IonButton>
      </div>
    </div>
  );
}
