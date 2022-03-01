import logo from './logo.svg';
import './App.css';
import HcdHome from './components/HcdHome';
import HcdTemplate from './components/HcdTemplate';
import HcdForm from './components/HcdForm';
import React, { useState } from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import HcdHourlyHome from './components/HcdHourlyHome';
import HcdHourlyForm from './components/HcdHourlyForm';
import HCDHourlyTemplate from './components/HCDHourlyTemplate';
function App() {
  const [data, setEmpdata] = useState({});
  const [condition, setcondition] = useState(false);
  const datatoApp = (data) => {
    setEmpdata(data);
    setcondition(true);
  }
  return (
    <div className="App">
      {!condition && <HcdHourlyHome datatoApp={datatoApp} />}
      {condition && <HCDHourlyTemplate data={data} condition={"Pranay"}/>}
    </div>
  );
}

export default App;
