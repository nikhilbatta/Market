import React from "react";
import Produce from "./Produce";
import PropTypes from "prop-types";
function ProduceList(props) {
  // this.updateVegetable = this.updateVegetable.bind(this);
  

  // updateVegetable(newText, i) {
  //   console.log(this.state.MasterProduceList.name);
  //   var arr = this.state.MasterProduceList;
  //   arr[i].name = newText;
  //   this.setState({MasterProduceList: arr });
  // }
  return (
    <div>
      <hr />
      {props.masterProduceList.map((produce, i) =>
        <Produce name={produce.name}
          price={produce.price} 
          photo={produce.photo}
          quantity={produce.quantity}
          index={i}
          key={i}
          
          updatedName={props.updatedName}/> 
      )}
    </div>
  );
}
ProduceList.propTypes = {
  updatedName: PropTypes.func,
  masterProduceList: PropTypes.array

};

export default ProduceList;