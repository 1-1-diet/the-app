import React from "react";
import { IonGrid, IonCol } from "@ionic/react";
import "./Header.css";
import ptrn from "../../Images/ptrn.svg";
import logo from "../../Images/logo.svg";

const Header: React.FC = () => {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();
  const name = ["Hendrick", " Fredd", " Jan"];

  if (hours < 12) {
    timeOfDay = "morgen";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "middag";
  } else {
    timeOfDay = "avond";
  }

  return (
    <div className="headerbackground">
      <img src={ptrn} alt="food ptrn" className="headerptrn" />
      <img src={logo} alt="Pech hij doet t niet" className="headerlogo" />
      <div className="content">
        <IonGrid>
          <IonGrid className="ion-margin">
            <IonCol className="ion-text-center headertitle">
              <h1>Goeie {timeOfDay}!</h1>
              <h1>{name}</h1>
            </IonCol>
          </IonGrid>
        </IonGrid>
      </div>
    </div>
  );
};
export default Header;
