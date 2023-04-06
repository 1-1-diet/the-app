import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { IonIcon, IonText } from "@ionic/react";
import {
  homeOutline,
  locationOutline,
  personOutline,
  cardOutline,
  chatbubbleEllipsesOutline,
} from "ionicons/icons";

export default function Navbar() {
  const [page, setPage] = useState(1);
  const [home, setHome] = useState(styles.active);

  //   useEffect(() => {
  //     if (page === 1) {
  //       setHome(true);
  //     } else {
  //       setHome(false);
  //     }

  //     console.log(home);
  //   }, [page]);

  const Navbar = [
    {
      title: "Home",
      icon: homeOutline,
      active: "block",
      style: { home },
    },
    {
      title: "Consulent",
      icon: locationOutline,
      active: "none",
      style: "",
    },
    {
      title: "Profiel",
      icon: personOutline,
      active: "none",
      style: "",
    },
    {
      title: "Shop",
      icon: cardOutline,
      active: "none",
      style: "",
    },
    {
      title: "Chat",
      icon: chatbubbleEllipsesOutline,
      active: "none",
      style: "",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navContainer}>
        {Navbar?.map((element) => {
          return (
            <div
              key={element.title}
              className={styles.tabContainer}
              id={element.style}
            >
              <IonIcon icon={element.icon} id={styles.icon} size="large" />
              <IonText style={{ display: `${element.active}` }}>
                {element.title}
              </IonText>
            </div>
          );
        })}
      </div>
    </div>
  );
}
