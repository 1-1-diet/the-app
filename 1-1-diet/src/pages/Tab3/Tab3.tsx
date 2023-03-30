import { useState, useEffect } from "react";
import { IonContent, IonPage, IonText } from "@ionic/react";
import styles from "./Tab3.module.css";
import Header from "../../components/nieuwProfiel/header/Header";
import Gegevens from "../../components/nieuwProfiel/gegevens/Gegevens";
import Activiteiten from "../../components/nieuwProfiel/activiteiten/Activiteiten";
import Instellingen from "../../components/nieuwProfiel/Instellingen/Instellingen";
const Tab3: React.FC = () => {
  const [catOption, setCatOption] = useState("");
  const [cat, setCat] = useState("Activiteiten");
  const [profile, setProfile] = useState(<Activiteiten />);

  useEffect(() => {
    if (cat === "Activiteiten") {
      setProfile(<Activiteiten />);
    }
    if (cat === "Gegevens") {
      setProfile(<Gegevens />);
    }
    if (cat === "Instellingen") {
      setProfile(<Instellingen />);
    }
  }, [catOption]);

  const nCat = [
    { title: "Activiteiten", set: "Activiteiten" },
    { title: "Gegevens", set: "Gegevens" },
    { title: "Instellingen", set: "Instellingen" },
  ];

  return (
    <IonPage>
      <IonContent className={styles.mainContainer}>
        <Header />
        <div className={styles.catContainer}>
          {nCat?.map((element) => {
            return (
              <div
                key={element.title}
                className={styles.btnContainer}
                onClick={() => {
                  setCatOption(element.set);
                  setCat(element.title);
                }}
                style={
                  cat === element.title
                    ? { borderBottom: "0.1em solid #5c9ad0" }
                    : { borderBottom: "0.1em solid #5c9ad000" }
                }
              >
                <IonText id={styles.catTitle}>{element.title}</IonText>
              </div>
            );
          })}
        </div>
        {profile}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
