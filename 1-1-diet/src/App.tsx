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
import { location, home, person, cart } from "ionicons/icons";
import Tab1 from "./pages/Tab1/Tab1";
import Tab2 from "./pages/Tab2/Tab2";
import Tab3 from "./pages/Tab3/Tab3";
import Tab4 from "./pages/Tab4/Tab4";
import { ProductDetails } from "./pages/Tab4/ProductDetails";

/* Dashboard non user */
import Tab1NonUser from "./pages/Tab1/Tab1NonUser";

/* Extra */
import WorkInProgress from "./pages/WorkInProgress/WorkInProgress";

setupIonicReact();

const App: React.FC = () => {
  const [showTabs, setShowTabs] = useState(false);
  let tabBarStyle = showTabs === true ? undefined : { display: "none" };

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
                  <Route
                    path="/tabs/tab4/:productId"
                    component={ProductDetails}
                  />
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
