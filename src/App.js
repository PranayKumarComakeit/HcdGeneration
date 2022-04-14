
import './App.css';
import HcdHome from './components/HcdHome';
import HcdTemplate from './components/HcdTemplate';
import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router
} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import HcdHourlyHome from './components/HcdHourlyHome';
import HCDHourlyTemplate from './components/HCDHourlyTemplate';
import ErrorPage from './components/ErrorPage';
import AuthState from './contexts/AuthState';
import authContext from "./contexts/authContext";
function App() {
  const [data, setEmpdata] = useState({});
  const [condition, setcondition] = useState(false);
  const datatoApp = (data) => {
    setEmpdata(data);
    setcondition(true);
  }
  const context = useContext(authContext);
  const {  authFunc ,getKeyAndToken, getClientDetails, getManagerDetails, clientData, managerData, authData } = context;
  useEffect(async() => {
    getKeyAndToken();
    authFunc();
    getClientDetails();
    getManagerDetails();
  }, []);
  const [apiData, setapiData] = useState({
    clientData: [],
    managerData: [],
    authData: 0,
  });

    console.log("AuthData",authData, "cl data", clientData, "m data", managerData);
    setapiData({clientData:clientData, managerData:managerData, authData:authData})


  return (
    <div className="App">
      {console.log(apiData)}
      <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<HcdHome datatoApp={datatoApp} apiData={apiData} />}/>
         <Route exact path="/HCDHourly" element={<HcdHourlyHome datatoApp={datatoApp} apiData={apiData} />}/>
         <Route exact path="/OpenTemplate" element={<HcdTemplate data={data} />}/>
         <Route exact path="/HourlyTemplate" element={<HCDHourlyTemplate data={data} />}/>
         <Route exact path="/Error" element={<ErrorPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
