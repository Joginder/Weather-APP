import React from 'react';
const Weather = (props) => {
  return(
       <div>  
      {props.country && props.city && <p>Location: {props.city},{props.country}</p>}
      {props.temperature && <p>Temperature: {props.temperature}<sup>o</sup></p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions:  {props.description}</p>}
      {props.icon && <p>Image:  {props.icon}</p>}
      {props.error && <p>{props.error} <i className='fab fa-earlybirds'></i>Weather...</p>}
       </div>
   )
}
export default Weather;