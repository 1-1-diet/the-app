import { IonButton, IonIcon, IonText } from "@ionic/react";
import styles from "./MarkInfoWindow.module.css";
import { chatboxEllipsesOutline } from "ionicons/icons";

export const MarkerInfoWindow = ({ marker, dismiss }: any) => {
  return (
    <div className={styles.mainContainer}>
      <h1 id={styles.title}>{marker.name}</h1>
      <div className={styles.consulentContainer}>
        <img src={marker.image} alt="consulent profiel foto" id={styles.img} />
        <div className={styles.consulentInfo}>
          <IonText>{marker.name}</IonText>
          <IonText id={styles.distance}>
            {marker.distance} van je locatie
          </IonText>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <IonButton color={"white"} id={styles.afspraak}>
          Afspraak maken
        </IonButton>
        <IonButton color={"secondary"} id={styles.moreInfo}>
          <IonIcon icon={chatboxEllipsesOutline} size="large" />
        </IonButton>
      </div>
      <div className={styles.aboutMe}>
        <h1 id={styles.secondTitle}>Over mij:</h1>
        <IonText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          earum nemo impedit iusto aliquid ipsam hic repudiandae incidunt
          facilis necessitatibus quidem, enim vitae, distinctio nulla nesciunt.
          Totam ratione itaque ad!
        </IonText>
      </div>
      <div className={styles.openTime}>
        <h1 id={styles.secondTitle}>Openingstijden:</h1>
        <IonText>Maandag tot Vrijdag: {marker.time}</IonText>
      </div>
    </div>
  );
};
