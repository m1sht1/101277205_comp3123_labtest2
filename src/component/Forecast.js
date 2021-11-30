import React from "react";

const Weather = props => {
  return (
    <div>
        <h2>{props.cityname}</h2>
        <h5>
          <i className={`wi ${props.weatherIcon} display-3`} />
        </h5>

        {props.temp_celsius ? (
          <h1>{props.temp_celsius}&deg;</h1>
        ) : null}

        <h3>{maxminTemp(props.temp_min, props.temp_max)}</h3>

        <h4>
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)} 
        </h4>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span>Min: {min}&deg; </span>
        <span>Max: {max}&deg;</span>
      </h3>
    );
  }
} 
