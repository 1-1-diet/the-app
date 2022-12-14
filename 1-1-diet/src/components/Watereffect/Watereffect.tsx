import React from "react";
import { IonCard } from "@ionic/react";
import "./Watereffect.css";

const Watereffect: React.FC = () => {
  return (
    <IonCard className="box">
      <div className="circle">
        <div className="wave"></div>
      </div>
    </IonCard>
  );
};
export default Watereffect;
