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

/* Login */
import Login from "./pages/Login/Login";
import FillEmailIn from "./pages/Login/WachtwoordVergeten/FillEmailIn";
import FillCodeIn from "./pages/Login/WachtwoordVergeten/FillCodeIn";
import ChangeCode from "./pages/Login/WachtwoordVergeten/ChangeCode";

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
  const [showTabs, setShowTabs] = useState(true);
  let tabBarStyle = showTabs === false ? undefined : { display: "none" };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
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

            <Route exact path="/nonUser/Tab1" component={Tab1NonUser} />

            <Route exact path="/tab1" component={Tab1} />
            <Route exact path="/tab2" component={WorkInProgress} />
            <Route exact path="/tab3" component={Tab3} />
            <Route exact path="/tab4" component={Tab4} />
            <Route path="/tab4/:productId" component={ProductDetails} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom" style={tabBarStyle}>
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={location} />
              <IonLabel>Consulent zoeken</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={person} />
              <IonLabel>Profiel</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4">
              <IonIcon icon={cart} />
              <IonLabel>Winkel</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
