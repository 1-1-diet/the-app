import {
  chevronForwardOutline,
  transgenderOutline,
  calendarOutline,
  homeOutline,
  mailOutline,
  callOutline,
} from "ionicons/icons";

import { UserProfile } from "../../data";

export const Settings = [
  {
    icon: transgenderOutline,
    title: "Geslacht",
    icon2: chevronForwardOutline,
    gegevens: UserProfile[0].gender,
  },
  {
    icon: calendarOutline,
    title: "Geboortedatum",
    icon2: chevronForwardOutline,
    gegevens: UserProfile[0].birthdate,
  },
  {
    icon: homeOutline,
    title: "Adress",
    icon2: chevronForwardOutline,
    gegevens: UserProfile[0].adress,
  },
  {
    icon: mailOutline,
    title: "Email",
    icon2: chevronForwardOutline,
    gegevens: UserProfile[0].email,
  },
  {
    icon: callOutline,
    title: "T - nummer",
    icon2: chevronForwardOutline,
    gegevens: UserProfile[0].number,
  },
];
