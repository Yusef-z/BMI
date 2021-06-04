import logo from './logo.svg';
import './App.css';
import Switch from "./Components/Switch"
import MetricVImperial from "./Components/MetricVImperial"
import Title from "./Components/Title"
import Form from "./Components/Form"
import { useState } from "react"


function App() {
  const [status, setStatus] = useState(false);
  return (
    <div className="App">
      <Title></Title>
      <MetricVImperial status = {status} statusChange = {setStatus}/>
      <Form status = {status}></Form>
    </div>
  );
}

export default App;
