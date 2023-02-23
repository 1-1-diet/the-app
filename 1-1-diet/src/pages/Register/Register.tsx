import {
  IonCheckbox,
  IonText,
  IonInput,
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonCol,
  IonIcon,
  IonRouterLink,
} from "@ionic/react";
import {
  personOutline,
  callOutline,
  mailOutline,
  lockClosedOutline,
} from "ionicons/icons";
import styles from "./Register.module.css";
import BgPtrn from "../../components/Splashscreen/BgPtrn";
import klap from "../../Images/logo2.svg";

export default function Register() {
  const register = [
    {
      title: " Voor en Achternaam",
      icon: personOutline,
    },
    {
      title: " Mobiel nummer",
      icon: callOutline,
    },
    {
      title: " Email",
      icon: mailOutline,
    },
    {
      title: " wachtwoord",
      icon: lockClosedOutline,
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <BgPtrn />
      <div className={styles.mainContent}>
        <img id={styles.klap} src={klap} alt="logo" />
        <div>
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
        </div>
        <div className={styles.extraContent}>
          <div className={styles.stayLogged}>
            <IonCheckbox />
            <IonText>Ingelogd blijven</IonText>
            <IonRouterLink href={`/login`}>
              Heb je al een account?<IonText> Log in</IonText>
            </IonRouterLink>
          </div>
        </div>
        <div className={styles.button}>
          <IonButton color="secondary" href={`/register/profile`}>
            Volgende
          </IonButton>
        </div>
      </div>
    </div>
  );
}
