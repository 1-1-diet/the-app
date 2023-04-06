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
  const [home, setHome] = useState(true);
  const [consulent, setConsulent] = useState(false);
  const [profiel, setProfiel] = useState(false);
  const [shop, setShop] = useState(false);
  const [chat, setChat] = useState(false);

  useEffect(() => {
    if (page === 1) {
      setHome(true);
      setConsulent(false);
      setProfiel(false);
      setShop(false);
      setChat(false);
    }
    if (page === 2) {
      setHome(false);
      setConsulent(true);
      setProfiel(false);
      setShop(false);
      setChat(false);
    }
    if (page === 3) {
      setHome(false);
      setConsulent(false);
      setProfiel(true);
      setShop(false);
      setChat(false);
    }
    if (page === 4) {
      setHome(false);
      setConsulent(false);
      setProfiel(false);
      setShop(true);
      setChat(false);
    }
    if (page === 5) {
      setHome(false);
      setConsulent(false);
      setProfiel(false);
      setShop(false);
      setChat(true);
    }
  }, [page]);

  const Navbar = [
    {
      title: "Home",
      icon: homeOutline,
      active: home,
      tab: 1,
    },
    {
      title: "Consulent",
      icon: locationOutline,
      active: consulent,
      tab: 2,
    },
    {
      title: "Profiel",
      icon: personOutline,
      active: profiel,
      tab: 3,
    },
    {
      title: "Shop",
      icon: cardOutline,
      active: shop,
      tab: 4,
    },
    {
      title: "Chat",
      icon: chatbubbleEllipsesOutline,
      active: chat,
      tab: 5,
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navContainer}>
        {Navbar?.map((element, tab) => {
          return (
            <div
              key={element.title}
              className={styles.tabContainer}
              onClick={() => setPage(tab)}
            >
              <IonIcon icon={element.icon} id={styles.icon} size="large" />
              {`${element.active}` === "true" ? <h1>{element.title}</h1> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
