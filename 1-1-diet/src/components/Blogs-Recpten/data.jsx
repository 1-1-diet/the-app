// import images
import aardbij from "../../Images/aardbij.png";
import advocado from "../../Images/advocado.png";

// import icons
import {
  flameOutline,
  eggOutline,
  fishOutline,
  leafOutline,
} from "ionicons/icons";

export const Recepten = [
  {
    id: "1",
    recept: 0,
    image: aardbij,
    title: "Yoguhrt met aardbei",
    bakeTime: "5 minuten",
    yummies: "150",
    tags: [
      { icon: flameOutline, title: "80 kcal" },
      { icon: eggOutline, title: "80 kcal" },
      { icon: fishOutline, title: "80 kcal" },
      { icon: leafOutline, title: "80 kcal" },
    ],
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales ipsum quis augue laoreet, nec finibus felis dignissim. Aenean dignissim hendrerit aliquam. Aliquam erat volutpat. Nam bibendum purus vel pretium varius. Suspendisse egestas felis eu ipsum fringilla sagittis. Proin consectetur, nisi vitae aliquam pellentesque, tellus sem finibus orci, eu tristique ante libero sit amet elit. Phasellus ornare vel enim non ultrices.",
    ingridient: [
      { image: aardbij, title: "Yoghurt", wheight: "200g" },
      { image: aardbij, title: "Aardbiij", wheight: "200g" },
    ],
  },
  {
    id: "2",
    recept: 1,
    image: advocado,
    title: "Advocado",
    bakeTime: "10 minuten",
    yummies: "125",
    tags: [
      { icon: flameOutline, title: "80 kcal" },
      { icon: eggOutline, title: "80 kcal" },
      { icon: fishOutline, title: "80 kcal" },
      { icon: leafOutline, title: "80 kcal" },
    ],
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales ipsum quis augue laoreet, nec finibus felis dignissim. Aenean dignissim hendrerit aliquam. Aliquam erat volutpat. Nam bibendum purus vel pretium varius. Suspendisse egestas felis eu ipsum fringilla sagittis. Proin consectetur, nisi vitae aliquam pellentesque, tellus sem finibus orci, eu tristique ante libero sit amet elit. Phasellus ornare vel enim non ultrices.",
    ingridient: [
      { image: aardbij, title: "Yoghurt", wheight: "200g" },
      { image: aardbij, title: "Aardbiij", wheight: "200g" },
    ],
  },
];

export const Blogs = [
  {
    id: "1",
    image: aardbij,
    title: "Weer op de weegschaal",
    date: "Sep 4 2022",
    yummies: "150",
    tag: "populair",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales ipsum quis augue laoreet, nec finibus felis dignissim. Aenean dignissim hendrerit aliquam. Aliquam erat volutpat. Nam bibendum purus vel pretium varius. Suspendisse egestas felis eu ipsum fringilla sagittis. Proin consectetur, nisi vitae aliquam pellentesque, tellus sem finibus orci, eu tristique ante libero sit amet elit. Phasellus ornare vel enim non ultrices.",
  },
  {
    id: "2",
    image: advocado,
    title: "Weer een advocado",
    date: "Dec 4 2022",
    yummies: "150",
    tag: "populair",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales ipsum quis augue laoreet, nec finibus felis dignissim. Aenean dignissim hendrerit aliquam. Aliquam erat volutpat. Nam bibendum purus vel pretium varius. Suspendisse egestas felis eu ipsum fringilla sagittis. Proin consectetur, nisi vitae aliquam pellentesque, tellus sem finibus orci, eu tristique ante libero sit amet elit. Phasellus ornare vel enim non ultrices.",
  },
];
