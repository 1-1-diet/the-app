import { useState } from "react";
import {
  IonCheckbox,
  IonText,
  IonInput,
  IonButton,
  IonNote,
  IonItem,
  IonIcon,
  IonRouterLink,
} from "@ionic/react";
import {
  personOutline,
  callOutline,
  mailOutline,
  lockClosedOutline,
  eyeOffOutline,
  eyeOutline,
} from "ionicons/icons";
import styles from "./Register.module.css";
import BgPtrn from "../../components/Splashscreen/BgPtrn";
import klap from "../../Images/logo2.svg";

export default function Register() {
  // const register = [
  //   {
  //     title: " Voor en Achternaam",
  //     icon: personOutline,
  //   },
  //   {
  //     title: " Mobiel nummer",
  //     icon: callOutline,
  //   },
  //   {
  //     title: " Email",
  //     icon: mailOutline,
  //   },
  //   {
  //     title: " wachtwoord",
  //     icon: lockClosedOutline,
  //   },
  // ];

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
        <img id={styles.klap} src={klap} alt="logo" />
        <div className={styles.inputFields}>
          <div className={styles.inputContainer}>
            <IonIcon icon={personOutline} size="large" color="secondary" />
            <IonItem id={styles.input} lines="none">
              <IonInput placeholder="Naam" />
            </IonItem>
          </div>
          <div className={styles.inputContainer}>
            <IonIcon icon={callOutline} size="large" color="secondary" />
            <IonItem id={styles.input} lines="none">
              <IonInput placeholder="Telefoon nummer" type={"tel"} />
            </IonItem>
          </div>
          <div className={styles.inputContainerMail}>
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
            <IonIcon icon={lockClosedOutline} size="large" color="secondary" />
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
        <div className={styles.button}>
          <IonButton
            id={styles.button}
            color="secondary"
            href={`/register/profile`}
          >
            Volgende
          </IonButton>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
  <IonCol>
    {register?.map((element: any) => {
      return (
        <IonCol size="6" key={element.title}>
          <div className={styles.inputContainer}>
            <IonItem lines="none">
              <IonIcon icon={element.icon} color="secondary" />
              <IonInput placeholder={element.title} />
            </IonItem>
          </div>
        </IonCol>
      );
    })}
  </IonCol>
</div>; */
}
