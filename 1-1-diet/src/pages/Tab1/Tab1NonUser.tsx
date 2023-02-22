import { IonContent, IonPage } from "@ionic/react";

import Header from "../../components/Header/HeaderNonUser";
import Promo from "../../components/UitlegCard/UitlegCard";
import Devider from "../../components/Divider/Divider";
import Blogs from "../../components/RecomendedBlogs/RecomendedBlogs";
import Recepten from "../../components/TipvsVoorVandaag/TipsVoorVandaag";
import Footer from "../../components/Footer/Footer";
import Faq from "../../components/Inforcards/Inforcard";
import Product from "../../components/ProductSwiper/ProductSwiper";

export default function Tab1NonUser() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        <Promo />
        <Devider />
        <Product />
        <Blogs />
        <Recepten />
        <Faq />
        <Footer />
      </IonContent>
    </IonPage>
  );
}
