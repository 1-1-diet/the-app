import React from "react";
import { IonPage, IonCard, IonButton, IonText } from "@ionic/react";
import {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
  Virtual,
} from "swiper";
import "./Infocard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Home: React.FC = () => {
  return (
    <Swiper
      modules={[Pagination, Virtual]}
      pagination={{ clickable: true }}
      virtual
      className="info-swiper"
    >
      <SwiperSlide>
        <IonCard className="cardone">
          <div className="logoone"></div>
          <div className="textbox">
            <IonText>
              <h5 className="cardonetext">
                Met The 1:1 Diet val je af en ga je naar een gezonde leefstijl,
                voor nu én later!
              </h5>
            </IonText>

            <IonButton className="button" color="primary">
              <h5>Lees meer</h5>
            </IonButton>
          </div>
        </IonCard>
      </SwiperSlide>

      <SwiperSlide>
        <IonCard className="cardtwo">
          <div className="logotwo"></div>
          <div className="textbox">
            <IonText>
              <h5 className="cardtwotext">
                Al 25 jaar meer dan alleen een dieet! Ruim 1,2 miljoen cliënten
                gingen je voor.
              </h5>
            </IonText>

            <IonButton color="primary">
              <h5>Lees meer</h5>
            </IonButton>
          </div>
        </IonCard>
      </SwiperSlide>
    </Swiper>
  );
};
export default Home;
