import React from "react";
import Produce from "./Produce";
import apple from "../Assets/Img/apple.png";
import kale from "../Assets/Img/kale.png";
import greenBeans from "../Assets/Img/gb.png";
import potatoes from "../Assets/Img/pots.png";
import squash from "../Assets/Img/squash.png";

var MasterProduceList = [
  {
    name: "SweetBee Apples",
    price: "$0.60/lb",
    photo: apple
  },
  {
    name: "Kale",
    price: "$3.99/bunch",
    photo: kale
  },
  {
    name: "Green Beans",
    price: "$1.99/lb",
    photo: greenBeans

  },
  {
    name: "Potatoes",
    price: "$0.99/lb",
    photo: potatoes
  },
  {
    name: "Acorn Squash",
    price: "$1.99/lb",
    photo: squash
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
          key={index}/> 
      )}
    </div>
  );
}
export default ProduceList;