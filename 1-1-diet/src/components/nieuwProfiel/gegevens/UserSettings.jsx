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
    gegevens: UserProfile[0].gender,
  },
  {
    icon: calendarOutline,
    title: "Geboortedatum",
    gegevens: UserProfile[0].birthdate,
  },
  {
    icon: homeOutline,
    title: "Adress",
    gegevens: UserProfile[0].adress,
  },
  {
    icon: mailOutline,
    title: "Email",
    gegevens: UserProfile[0].email,
  },
  {
    icon: callOutline,
    title: "T - nummer",
    gegevens: UserProfile[0].number,
  },
];
