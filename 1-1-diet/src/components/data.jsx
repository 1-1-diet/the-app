// import fotos
import userPorifle from "../Images/profileImg.jpg";
import consulentProfile from "../Images/consulentProfile.svg";
import { location, callOutline, mailOpen } from "ionicons/icons";
import masterCard from "../Images/Mastercard-logo.png";
import sim from "../Images/sim.png";
import wifi from "../Images/wifi.png";

// import icons

// other imports

export const UserProfile = [
  {
    profileImg: userPorifle,
    name: "Angela Huisman",
    useTime: "3 maanden",

    gender: "Vrouw",
    birthdate: "09/04/1994",
    adress: "spreeuwstraat 59",
    email: "angelahuisman@gmail.com",
    number: "+31 6 83443077",
    payment: [
      {
        name: "Angela Huisman",
        date: "21/09",
        number: "5784",
        icon: masterCard,
        color: "#009286",
        sim: sim,
        simlogo: wifi,
      },
      {
        name: "Sybren Huisman",
        date: "21/09",
        number: "5284",
        icon: masterCard,
        color: "#ff6200",
        sim: sim,
        simlogo: wifi,
      },
    ],

    wheightMoments: [],
    orderHistory: [],
    foodFav: [],
    consulenten: [
      {
        profileImg: consulentProfile,
        name: "Stella Kane",
        location: "Utrecht",
        number: "+31 6 53394057",
        loctionIcon: location,
        callIcon: callOutline,
        mailIcon: mailOpen,
      },
    ],
    meetings: [
      {
        time: "10",
        date: "15/06/23",
        place: "De schout 24",
        loctionIcon: location,
        recap: [
          {
            description: "lorem ipsum",
          },
        ],
        color: "#EDF1FA",
        color2: "#D8E3FF",
      },
      {
        time: "11",
        date: "14/04/23",
        place: "Online",
        loctionIcon: location,
        recap: [
          {
            description: "lorem ipsum",
          },
        ],
        color: "#F9E4EE",
        color2: "#F4CEE0",
      },
    ],

    passwoord: "",
    pushNotification: true,
  },
];
