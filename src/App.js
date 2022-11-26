import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [tank, setTank] = useState(0);
  const [mpg, setMpg] = useState(0);
  const [distance, setDistance] = useState(0);
  const [result, setResult] = useState('')
  const onTankChange = (event) => {
  setTank(event.target.value)
      calculate()
  }

  const onMpgChange =(event) => {
 setMpg(event.target.value)
      calculate()
  }

  const onDistanceChange = (event) => {
  setDistance(event.target.value)
      calculate()
  }

  const calculate = ( ) => {
      const carDistance = tank * mpg;
      if (carDistance >= distance) setResult('we arrived')
      else
          setResult('we did not arrive')
  }
  return (
    <div className="App">
      <div>
        <label htmlFor="tank">Tank, gal</label>
        <input value={tank} onChange={onTankChange} name="tank" type="number"/>
      </div>
      <div>
        <label htmlFor="mpg">MPG</label>
        <input value={mpg} onChange={onMpgChange} name="mpg" type="number"/>
      </div>
      <div>
        <label htmlFor="distance">Distance, miles</label>
        <input value={distance} onChange={onDistanceChange} name="distance" type="number"/>

      </div>


        <hr/>
        <div>{tank}</div>
        <div>{mpg}</div>
        <div>{distance}</div>

        {result}
    </div>
  );
}

export default App;
