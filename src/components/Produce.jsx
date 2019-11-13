import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
    var imageStyle = {
        width: "150px",
    };
    var galleryStyle = {
        display: "block",
    };
    var productStyle = {
        display: "inline-block",
    };
  return (
    <div style={galleryStyle} className="gallery">
        <div style={productStyle} className="product">
          <h3>{props.name}</h3>
          <p>{props.price}</p>
          <img style={imageStyle}src={props.photo}/>
        </div>
        <hr />
      </div>
  );
}

Produce.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  photo: PropTypes.string,
};

export default Produce;