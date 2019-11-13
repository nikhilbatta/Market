import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
    var imageStyle = {
        width: "150px",
        maxHeight: "150px",
        backgroundColor: "blanchedalmond",
    };
    var galleryStyle = {
        // flexDirection: "ltr ",
        // margin: "20",
        // display: "inline-flex",
        margin: "0 auto 0 auto",
        backgroundColor: "blanchedalmond"
    };
    var productStyle = {
        width: "250px",
        height: "250px",
        textAlign: "center",
        // order: "0",
        padding: "15",
        // alignSelf: "center",
    };
    var contentStyle = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        
        margin: "1% 1%",
        // display: "flex",
    };

  return (
    <div style={contentStyle}>
        <div style={galleryStyle} className="card">
            <div style={productStyle} className="flex-item">
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <img style={imageStyle}src={props.photo}/>
            </div>
            
        </div>
    </div>
  );
}

Produce.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  photo: PropTypes.string,
};

export default Produce;