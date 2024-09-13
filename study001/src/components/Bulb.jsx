import { useState } from "react";

const Bulb = () => {

    const [light, setLight] = useState("OFF");
    console.log(light);
    return(
      <div>
        {light === 'ON' ? 
        <h1 style={{backgroundColor : "green"}}>ON</h1> : 
        <h1 style={{backgroundColor : "gray"}}>OFF</h1>}
        <button onClick={() => {
          setLight(light === 'ON' ? "OFF" : "ON");
        }}>{light === "ON" ? "OFF" : "ON"}</button>
      </div>
    );
  };

export default Bulb;