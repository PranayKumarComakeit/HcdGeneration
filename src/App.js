import logo from './logo.svg';
import './App.css';
import HcdHome from './components/HcdHome';
import HcdTemplate from './components/HcdTemplate';
import React, { useState } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router
} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import HcdHourlyHome from './components/HcdHourlyHome';
import HcdHourlyForm from './components/HcdHourlyForm';
import HCDHourlyTemplate from './components/HCDHourlyTemplate';
import ErrorPage from './components/ErrorPage';
function App() {
  const [data, setEmpdata] = useState({});
  const [condition, setcondition] = useState(false);
  const datatoApp = (data) => {
    setEmpdata(data);
    setcondition(true);
  }
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HcdHome datatoApp={datatoApp} />}/>
         <Route exact path="/HCDHourly" element={<HcdHourlyHome datatoApp={datatoApp} />}/>
         <Route exact path="/OpenTemplate" element={<HcdTemplate data={data} condition={"Pranay"}/>}/>
         <Route exact path="/HourlyTemplate" element={<HCDHourlyTemplate data={data} condition={"Pranay"}/>}/>
      </Routes>
      </BrowserRouter> */}
      <ErrorPage />
{/* {!condition && <HcdHome datatoApp={datatoApp} />}
      {condition && <HcdTemplate data={data} condition={"Pranay"}/>}
       */}
    </div>
  );
}

export default App;
