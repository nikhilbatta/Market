import React from "react";
import PropTypes from "prop-types";

function Market(props) {
  return (
    
    <div className="">
          <h3>{props.name}</h3>
          <p>{props.hours}</p>
        <hr />
      </div>
  );
}

Market.propTypes = {
  name: PropTypes.string,
  hours: PropTypes.string,
};

export default Market;