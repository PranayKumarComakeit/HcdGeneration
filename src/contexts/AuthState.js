import React, {useState} from "react";
import AuthContext from "./authContext";

const AuthState = (props) =>{
    const [clientData, setclientData] = useState([]);
    const [managerData, setmanagerData] = useState([]);
    const [key, setkey] = useState("");
    const [token, settoken] = useState("");

    const getKeyAndToken = async () => {
        //Api call
        const url = window.location.href();
        //for dynamic url we will use window.location.search() like below
//         const queryString = window.location.search;
// console.log(queryString);
// // ?product=shirt&color=blue&newuser&size=m
        let paramString = url.split('?')[1];
        // console.log(paramString)
        const urlParams = new URLSearchParams(paramString);
        const key = urlParams.get('key');
        // console.log(key)
        setkey(key)
        const token = urlParams.get('token');
        // console.log(token)
        settoken(token)
      };
      const authFunc = async () =>{
        const url = `https://webhrapi.comakeit.net/api/checkhcdarglink?key=${key}`;
        const response = await fetch(url, {
            // mode:'no-cors',
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        const json = await response.json()
        console.log(json);
        setclientData(json.data);
      }
      const getClientDetails = async () =>{
        const url = "https://webhrapi.comakeit.net/api/clientdetails";
        const response = await fetch(url, {
            // mode:'no-cors',
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dlYmhyXC8iLCJhdWQiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dlYmhyXC8iLCJqdGkiOiI0ZjFnMjNhMTJhYSIsImlhdCI6MTY0ODQ2MDMwMywiZXhwIjoxNjQ4NDYzOTAzLCJ1aWQiOjEwMCwidXNlcmlkIjoxNTEsInJvbGVpZCI6NX0.xbFTjtKPWy6YOn9DQeFJl-j4YFkS1Vc-hE5PZlyjOJs"
          }
        });
        const json = await response.json()
        console.log(json);
        setclientData(json.data);
      }
      const getManagerDetails = async () =>{
        const url = "https://webhrapi.comakeit.net/api/hiringmanager";
        const response = await fetch(url, {
            // mode:'no-cors',
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dlYmhyXC8iLCJhdWQiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dlYmhyXC8iLCJqdGkiOiI0ZjFnMjNhMTJhYSIsImlhdCI6MTY0ODQ2MDMwMywiZXhwIjoxNjQ4NDYzOTAzLCJ1aWQiOjEwMCwidXNlcmlkIjoxNTEsInJvbGVpZCI6NX0.xbFTjtKPWy6YOn9DQeFJl-j4YFkS1Vc-hE5PZlyjOJs"
          }
        });
        const json = await response.json()
        console.log(json);
        setmanagerData(json.data);
      }
    return(
        <AuthContext.Provider value={{clientData, managerData, authFunc ,getKeyAndToken, getClientDetails, getManagerDetails}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;