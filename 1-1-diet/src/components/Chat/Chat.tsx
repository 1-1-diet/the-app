import React from "react";
import { IonGrid, IonCol, IonRow, IonIcon } from "@ionic/react";
import { call } from "ionicons/icons";
import styles from "./Chat.module.css";
import ptrn from "../../Images/BACKGROUND 2.svg";
import profile1 from "./images/Photo Profile.svg";

export default function ChatList() {
  const contactDetails = [
    {
      name: "Stefan de Jong",
      img: profile1,
      icon: call,
      status: "online",
    },
  ];

  const chats = [
    {
      timeSend: " 09:53",
      user: "stefan",
      text: "Hallo hoe kan ik u helpen?",
    },
    {
      timeSend: " 09:56",
      user: "fred",
      text: "Ik wil graag een afspraak maken",
    },
  ];

  return (
    <div className={styles.headerbackground}>
      <img src={ptrn} alt="food ptrn" id={styles.headerptrn} />
      <div className={styles.content}>
        <IonGrid>
          <div className={styles.chat}>
            <div>
              {contactDetails?.map((element: any) => {
                return (
                  <IonGrid>
                    <IonRow className="ion-justify-content-between">
                      <IonRow>
                        <img src={element.img} alt="profile not found" />
                        <IonCol className="ion-margin-horizontal">
                          <p>{element.name}</p>
                          <p>{element.status}</p>
                        </IonCol>
                      </IonRow>
                      <div className={styles.time}>
                        <IonIcon
                          className={styles.icon}
                          icon={element.icon}
                          size="large"
                          color="secondary"
                        />
                      </div>
                    </IonRow>
                  </IonGrid>
                );
              })}
            </div>
          </div>
        </IonGrid>
      </div>
      <div className={styles.mainContainer}>
        {chats?.map((element) => {
          return (
            <div className={styles[element.user]}>
              <div className={styles.chats}>
                {element.text}
                {element.timeSend}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
