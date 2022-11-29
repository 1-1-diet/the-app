import React from "react";
import { IonPage, IonCard, IonButton, IonText, IonContent } from "@ionic/react";
import {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
  Virtual,
} from "swiper";
import "./Invite-friend-card.css";

import { Swiper, SwiperSlide } from "swiper/react";

const Home: React.FC = () => {
  return (
    <IonContent>
      <IonCard className="ivite-card">
        <div className="textbox">
          <IonText>
            <h5 className="ivite-card-text">
              Nodig je vriend via de uit en krijg 20 euro kortting op je
              volgende besteling
            </h5>
          </IonText>
          <IonButton color="primary">
            <h5>Lees meer</h5>
          </IonButton>
        </div>

        <div className="ivite-card-logo-coins">
          <div className="ivite-card-logo" />
        </div>
      </IonCard>
    </IonContent>
  );
};
export default Home;
