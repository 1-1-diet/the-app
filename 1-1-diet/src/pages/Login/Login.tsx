import React, { useState } from "react";
import {
  IonCheckbox,
  IonText,
  IonInput,
  IonButton,
  IonIcon,
  IonNote,
  IonItem,
  IonRouterLink,
} from "@ionic/react";
import styles from "./Login.module.css";
import "../Tab4/Tab4.css";
import BgPtrn from "../../components/Splashscreen/BgPtrn";
import klap from "../../Images/1to1girls.svg";
import {
  mailOutline,
  lockClosedOutline,
  eyeOutline,
  eyeOffOutline,
} from "ionicons/icons";

export default function SplashScreen() {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();
  const [showPassword, setShowPassword] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState(eyeOutline);

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

  const password = () => {
    if (showPassword === true) {
      setShowPassword(false);
      setPasswordIcon(eyeOffOutline);
    } else {
      setShowPassword(true);
      setPasswordIcon(eyeOutline);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <div className={styles.inputFieldContainer}>
          <div className={styles.top}>
            <img id={styles.klap} src={klap} alt="two girl giving a high 5" />
            <IonText id={styles.title}>Welkom terug</IonText>
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
            <div className={styles.inputContainer}>
              <IonIcon
                icon={lockClosedOutline}
                size="large"
                color="secondary"
              />
              <IonItem id={styles.input} lines="none">
                <IonInput
                  placeholder="Wachtwoord"
                  type={showPassword === true ? "password" : "email"}
                />
                <IonIcon
                  icon={passwordIcon}
                  size="medium"
                  onClick={() => password()}
                />
              </IonItem>
            </div>
            <div className={styles.extraContent}>
              <div className={styles.stayLogged}>
                <IonCheckbox color="secondary" />
                <IonText>Ingelogd blijven</IonText>
              </div>
              <IonRouterLink
                id={styles.textPink}
                href={`/login/wachtwoordVergeten/email`}
              >
                Wachtwoord vergeten?
              </IonRouterLink>
            </div>
          </div>
        </div>
        <div className={styles.continueContainer}>
          <IonButton id={styles.button} color="secondary" href={`/tabs/Tab1`}>
            <IonText id={styles.btnText}>Log in</IonText>
          </IonButton>
          <div className={styles.registreer}>
            <IonText>Nog geen client?</IonText>
            <IonRouterLink id={styles.textPink} href={`/register`}>
              Maak nu een account
            </IonRouterLink>
          </div>
        </div>
      </div>
    </div>
  );
}
