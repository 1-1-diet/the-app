import React from "react";
import { IonGrid, IonCol, IonRow, IonItem, IonRouterLink } from "@ionic/react";
import styles from "./ChatList.module.css";
import ptrn from "../../Images/BACKGROUND 2.svg";
import profile1 from "./images/Photo Profile.svg";
import profile2 from "./images/Photo Profile 2.svg";
import profile3 from "./images/Photo Profile 3.svg";
import team from "./images/Team.svg";
import { Route } from "workbox-routing";

export default function ChatList() {
  const chat = [
    {
      name: "Stefan de Jong",
      img: profile1,
      time: "20:00",
      status: "online",
    },
    {
      name: "Borus Rebel",
      img: profile2,
      time: "19:45",
      status: "Bezig",
    },
    {
      name: "Lissane Westerveld",
      img: profile3,
      time: "09:11",
      status: "Offline",
    },
  ];

  return (
    <div className={styles.headerbackground}>
      <img src={ptrn} alt="food ptrn" id={styles.headerptrn} />
      <div className={styles.content}>
        <IonGrid>
          <IonCol>
            <h1>Chat</h1>
          </IonCol>
          <div className={styles.chat}>
            <p>Consultants</p>
            <div>
              {chat?.map((element: any) => {
                return (
                  <IonRouterLink
                    key={element.name}
                    href="/tabs/chat"
                    style={{ zIndex: "100" }}
                  >
                    <IonGrid className={styles.contacts}>
                      <IonRow className="ion-justify-content-between">
                        <IonRow>
                          <img src={element.img} alt="profile not found" />
                          <IonCol className="ion-margin-horizontal">
                            <p>{element.name}</p>
                            <p>{element.status}</p>
                          </IonCol>
                        </IonRow>
                        <div className={styles.time}>
                          <p>{element.time}</p>
                        </div>
                      </IonRow>
                    </IonGrid>
                  </IonRouterLink>
                );
              })}
            </div>
          </div>
          <IonCol className={styles.team}>
            <IonCol>
              <p>1:1 Team Support</p>
            </IonCol>
            <IonCol>
              <IonGrid className={styles.contacts}>
                <IonRow className="ion-justify-content-between">
                  <IonRow>
                    <img src={team} alt="profile not found" />
                    <IonCol className="ion-margin-horizontal">
                      <p>1:1 Team</p>
                      <p>Online</p>
                    </IonCol>
                  </IonRow>
                  <div className={styles.time}>
                    <p>14:20</p>
                  </div>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonCol>
        </IonGrid>
      </div>
    </div>
  );
}
