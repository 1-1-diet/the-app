import { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* CSS */
import "./index.css";

/* Login */
import Login from "./pages/Login/Login";
import FillEmailIn from "./pages/Login/WachtwoordVergeten/FillEmailIn";
import FillCodeIn from "./pages/Login/WachtwoordVergeten/FillCodeIn";
import ChangeCode from "./pages/Login/WachtwoordVergeten/ChangeCode";

/* Register */
import Register from "./pages/Register/Register";
import UploadImage from "./pages/Register/UploadImage";
import UploadImageComplete from "./pages/Register/UploadImageComplete";

/* Dashboard User */
import { location, home, person, cart, chatbubble } from "ionicons/icons";
import Tab1 from "./pages/Tab1/Tab1";

import { Recept } from "./components/Blogs-Recpten/Recpten/Recept";
import ReceptAll from "./components/Blogs-Recpten/Recpten/ReceptAll";
import Blog from "./components/Blogs-Recpten/Blogs/Blog";
import BlogAll from "./components/Blogs-Recpten/Blogs/BlogAll";

// import Tab2 from "./pages/Tab2/Tab2";
import Tab2 from "./components/NieuwConsulentZoeken/ConsulentZoeken";
import AfsraakMaken from "./components/AfspraakMaken/AfspraakMaken";
import done from "./components/AfspraakMaken/Done";

import Tab3 from "./pages/Tab3/Tab3";
import Tab4 from "./pages/Tab4/Tab4";
import { ProductDetails } from "./pages/Tab4/ProductDetails";
import OrderList from "./components/OrderList/OrderList";
import ShoppingCart from "./components/OrderList/ShoppingCart/ShoppingCart";
import FinishOrder from "./components/OrderList/FinishOrder/FinishOrder";

import Tab5 from "./pages/Tab5/Tab5";
import chat from "./components/Chat/Chat";
import call from "./components/Chat/Call";

/* Dashboard non user */
import Tab1NonUser from "./pages/Tab1/Tab1NonUser";

/* Extra */
import WorkInProgress from "./pages/WorkInProgress/WorkInProgress";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/login/wachtwoordVergeten/email"
            component={FillEmailIn}
          />
          <Route
            exact
            path="/login/wachtwoordVergeten/emailCode"
            component={FillCodeIn}
          />
          <Route
            exact
            path="/login/wachtwoordVergeten/verranderWachtwoord"
            component={ChangeCode}
          />

          <Route exact path="/register" component={Register} />
          <Route exact path="/register/profile" component={UploadImage} />
          <Route
            exact
            path="/register/complete"
            component={UploadImageComplete}
          />
          <Route
            path="nonUser"
            render={() => (
              <IonTabs>
                <IonRouterOutlet>
                  <Route exact path="/nonUser/Tab1" component={Tab1NonUser} />
                  <Route exact path="/nonUser/Tab1" component={Tab1NonUser} />
                  <Route exact path="/nonUser/Tab1" component={Tab1NonUser} />
                  <Route exact path="/nonUser/Tab1" component={Tab1NonUser} />
                  <Route exact path="chat" component={chat} />
                  <Route exact path="call" component={call} />
                </IonRouterOutlet>

                <IonTabBar>
                  <IonTabButton tab="tab1" href="/nonUser/tab1">
                    <IonIcon icon={home} />
                    <IonLabel>Home</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab2" href="/nonUser/tab2">
                    <IonIcon icon={location} />
                    <IonLabel>Consulent</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab3" href="/nonUser/tab3">
                    <IonIcon icon={person} />
                    <IonLabel>Profiel</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab4" href="/nonUser/tab4">
                    <IonIcon icon={cart} />
                    <IonLabel>Winkel</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab5" href="/nonUser/tab5">
                    <IonIcon icon={chatbubble} />
                    <IonLabel>Chat</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            )}
          />

          <Route
            path="/tabs"
            render={() => (
              <IonTabs>
                <IonRouterOutlet>
                  <Route exact path="/tabs/tab1" component={Tab1} />
                  <Route exact path="/tabs/tab2" component={Tab2} />
                  <Route exact path="/tabs/tab3" component={Tab3} />
                  <Route exact path="/tabs/tab4" component={Tab4} />
                  <Route exact path="/tabs/tab5" component={Tab5} />

                  <Route
                    path="/tabs/tab4/:productId"
                    component={ProductDetails}
                  />
                  <Route
                    path="/tabs/tab1/recept/:receptId"
                    component={Recept}
                  />
                  <Route
                    exact
                    path="/tabs/tab1/blog/:blogId"
                    component={Blog}
                  />

                  <Route exact path="/tabs/chat" component={chat} />
                  <Route exact path="/tabs/call" component={call} />

                  <Route
                    exact
                    path="/tabs/afspraakMaken"
                    component={AfsraakMaken}
                  />
                  <Route exact path="/tabs/succes" component={done} />
                  <Route
                    exact
                    path="/tabs/OrderList"
                    component={ShoppingCart}
                  />
                  <Route
                    exact
                    path="/tabs/OrderList/Finish"
                    component={FinishOrder}
                  />

                  <Route exact path="/tabs/ReceptAll" component={ReceptAll} />
                  <Route exact path="/tabs/BlogALl" component={BlogAll} />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                  <IonTabButton tab="tab1" href="/tabs/tab1">
                    <IonIcon icon={home} />
                    <IonLabel>Home</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab2" href="/tabs/tab2">
                    <IonIcon icon={location} />
                    <IonLabel>Consulent</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab3" href="/tabs/tab3">
                    <IonIcon icon={person} />
                    <IonLabel>Profiel</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab4" href="/tabs/tab4">
                    <IonIcon icon={cart} />
                    <IonLabel>Winkel</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab5" href="/tabs/tab5">
                    <IonIcon icon={chatbubble} />
                    <IonLabel>Chat</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            )}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
