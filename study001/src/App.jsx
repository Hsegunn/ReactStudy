// import './App.css'
// // import Header from './components/Header';
// // import Main from './components/Main';
// // import Footer from './components/Footer';
// import Button from './components/Button';

// function App() {
  
//   const buttonProps = {
//     text : "메일",
//     color : "blue",
//     a : 1,
//     b : 2,
//     c : 3
//   }

//   return (
//     <>
//       <Button {...buttonProps}/>
//       <Button text = {"카페"}/>
//       <Button text = {"블로그"}>
//         <div>자식</div>
//       </Button>
      
//     </>
//   );
// }

// export default App



import './App.css';
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

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1);
      }}>+</button>
    </div>
  );
}

function App() {
  // const [state, setState] = useState(0);

  return (
    <>
      <Bulb />
      <Count />
    </>
  );
}

export default App


