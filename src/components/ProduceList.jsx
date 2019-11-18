import React from "react";
import Produce from "./Produce";
import apple from "../Assets/Img/apple.png";
import kale from "../Assets/Img/kale.png";
import greenBeans from "../Assets/Img/gb.png";
import potatoes from "../Assets/Img/pots.png";
import squash from "../Assets/Img/squash.png";
import ackee from "../Assets/Img/ackee.png";
import buddha from "../Assets/Img/buddha.png";
import cherimoya from "../Assets/Img/cherimoya.png";
import dragon from "../Assets/Img/dragon.png";
import durian from "../Assets/Img/durian.png";
import fiddle from "../Assets/Img/fiddlehead.png";
import galangal from "../Assets/Img/galangal.png";
import hala from "../Assets/Img/hala.png";
import langsat from "../Assets/Img/langsat.png";
import mangosteen from "../Assets/Img/mangosteen.png";
import rambutan from "../Assets/Img/Rambs.png";
import salak from "../Assets/Img/salak.png";
import tamarind from "../Assets/Img/tamarind.png";
import pot2 from "../Assets/Img/pots.jpg";
import stinky from "../Assets/Img/stinky.jpg";

var MasterProduceList = [
  {
    name: "Galangal",
    price: "$1.99/lb",
    photo: galangal,
    quantity: "128"

  },
  {
    name: "SweetBee Apples",
    price: "$0.60/lb",
    photo: apple,
    quantity: "128"
  },
  {
    name: "Tamarind",
    price: "$5.50/lb",
    photo: tamarind,
    quantity: "128"
  },
  {
    name: "Smelly Beans",
    price: "$10.99/lb",
    photo: stinky,
    quantity: "128"
  },
  {
    name: "Kale",
    price: "$3.99/bunch",
    photo: kale,
    quantity: "128"
  },
  {
    name: "Fiddleheads",
    price: "$4.49/lb",
    photo: fiddle,
    quantity: "128"
  },
  {
    name: "Durian",
    price: "$0.99/lb",
    photo: durian,
    quantity: "128"
  },
  {
    name: "Green Beans",
    price: "$1.99/lb",
    photo: greenBeans,
    quantity: "128"

  },
  {
    name: "Potatoes",
    price: "$0.99/lb",
    photo: potatoes,
    quantity: "128"
  },
  {
    name: "Acorn Squash",
    price: "$1.99/lb",
    photo: squash,
    quantity: "128"
  },
  {
    name: "Fruit of Hala",
    price: "$10.99/lb",
    photo: hala,
    quantity: "128"
  },
  {
    name: "Ackee",
    price: "$10.99/lb",
    photo: ackee,
    quantity: "128"
  },
  {
    name: "Buddha's Hand",
    price: "$15.99/lb",
    photo: buddha,
    quantity: "128"
  },
  {
    name: "Rambutan",
    price: "$7.99/each",
    photo: rambutan,
    quantity: "128"
  },
  {
    name: "Cherimoya",
    price: "$3.99/lb",
    photo: cherimoya,
    quantity: "128"
  },
  {
    name: "Langsat",
    price: "$2.99/lb",
    photo: langsat,
    quantity: "128"
  },
  {
    name: "Dragonfruit",
    price: "$3.99/lb",
    photo: dragon,
    quantity: "128"
  },
  {
    name: "?",
    price: "$3,000/each",
    photo: pot2,
    quantity: "128"
  },
  {
    name: "Salak",
    price: "$22.99/lb",
    photo: salak,
    quantity: "128"
  },
  {
    name: "Mangosteen",
    price: "$203.99/lb",
    photo: mangosteen,
    quantity: "128"
  },

];


function ProduceList() {

  return (
    <div>
      <hr />
      {MasterProduceList.map((produce, index) =>
        <Produce name={produce.name}
          price={produce.price} 
          photo={produce.photo}
          quantity={produce.quantity}
          
          key={index}/> 
      )}
    </div>
  );
}
export default ProduceList;