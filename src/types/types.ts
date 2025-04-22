import classic from '../assets/classic.webp';
import originalet from '../assets/originalet.webp';
import moggesheta from '../assets/moggesheta.webp';
import cheese from '../assets/cheese.webp';
import Halloumiburgare from '../assets/Halloumiburgare.webp';
import Vegoburgare from '../assets/Vegoburgare.webp';
import kyclingBacon from '../assets/kycling-bacon.webp';
import HalloumiAvocado from '../assets/Halloumi-avocado.webp';


export interface Burger {
  id: string;
  name: string;
  img: string;
  description: string;
  price: number;
}

export const burgerData: Burger[] = [
  {
    id: 'klassiker',
    name: 'Klassiker',
    img: classic,
    description: 'Ost x2, ketchup, senap, lök, saltgurka',
    price: 120,
  },
  {
    id: 'originalet',
    name: 'Originalet',
    img: originalet,
    description: 'Spicy chicken burger with lettuce',
    price: 130,
  },
  {
    id: 'mogges-heta',
    name: "Mogge's Heta",
    img: moggesheta,
    description: 'Ost x2, bacon, jalapeño, lök, chipotlemajonnäs',
    price: 130,
  },
  {
    id: 'nacka',
    name: 'Nacka',
    img: originalet,
    description: 'Ost x2, ketchup, senap, lök, saltgurka',
    price: 130,
  },
  {
    id: 'orminge',
    name: 'Orminge',
    img: cheese,
    description: 'Pepper jack ost x2, bacon, karamelliseradlök, chipotlemajonnäs, chiliflakes',
    price: 135,
  },
  {
    id: 'philadelphia',
    name: 'Philadelphia',
    img: moggesheta,
    description: 'Cheddar, pepper jack ost, färskost, lök, jalapeño, koriander',
    price: 135,
  },
  {
    id: 'frasses',
    name: 'Frasses',
    img: cheese,
    description: 'Öst x2, stekt lök, stekt jalapeño,stekt bacon, bbq, chipotle, sallad',
    price: 135,
  },
  {
    id: 'sonjas',
    name: 'Sonjas',
    img: originalet,
    description: 'Pepper jack ost x2, pepperoni, tomat,lök, srirachamajonnäs',
    price: 135,
  },
  {
    id: 'tryffel',
    name: 'Tryffel',
    img: moggesheta,
    description: 'Pepper jack ost, cheddarost, sallad, tryffelmajo, picklad rödlök',
    price: 135,
  },
];

export interface VegetariskSalladMenu {
    id: string;
    name: string;
    img: string;
    description: string;
    price: number;
}

export const vegetariskSalladData: VegetariskSalladMenu[] = [
    {
      id: 'halloumi',
      name: 'Halloumiburgare',
      img: Halloumiburgare,
      description: 'Friterad halloumi, avocado, sallad, tomat, picklad rödlök, färskost',
      price: 130,
    },
    {
      id: 'vegoburgare',
      name: 'Vegoburgare',
      img: Vegoburgare,
      description: 'Ost x2, sallad, lök, tomat, originaldressing, saltgurka',
      price: 110,
    },
    {
      id: 'kycling-bacon',
      name: 'Kyckling Bacon',
      img: kyclingBacon,
      description: 'Bas på romansallad, tomat, krutonger, dressing, picklad rödlök, parmesan',
      price: 125,
    },
    {
      id: 'halloumi-avocado',
      name: 'Halloumi Avocado',
      img: HalloumiAvocado,
      description: 'Bas på romansallad, tomat, krutonger, dressing, picklad rödlök, parmesan',
      price: 125,
    },
  ];
  
