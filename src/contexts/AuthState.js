import React, {useState} from "react";
import AuthContext from "./authContext";

const AuthState = (props) =>{
    const [clientData, setclientData] = useState([]);
    const [managerData, setmanagerData] = useState([]);
    const [authStatus, setauthStatus] = useState([]);
    const [key, setkey] = useState([]);
    const [token, settoken] = useState([]);

    const getKeyAndToken = async () => {
        //Api call
        const url = window.location.href;
        // console.log(url)
        //for dynamic url we will use window.location.search() like below
//         const queryString = window.location.search;
// console.log(queryString);
// // ?product=shirt&color=blue&newuser&size=m
        let paramString = url.split('?')[1];
        // console.log(paramString)
        const urlParams = new URLSearchParams(paramString);
        const keyFromURL = urlParams.get('key');
        key.unshift(keyFromURL)
        // console.log(keyFromURL)
        setkey(key)
        const tokenFromURL = urlParams.get('token');
        token.unshift(tokenFromURL)
        // console.log(tokenFromURL)
        settoken(token)

      };
      // console.log(key)
      // console.log(authUrl)
      const authFunc = async () =>{
        getKeyAndToken();
        console.log(key[0])
        console.log(token[0])
        const authUrl = `https://webhrapi.comakeit.net/api/checkhcdarglink?key=${key[0]}`;
        // console.log(authUrl)
        const response = await fetch(authUrl, {
            // mode:'no-cors',
          method: "GET",
          headers: {

            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
          }
        });
        const json = await response.json();
        console.log(json);
        setauthStatus(json.status)
        console.log(authStatus)
      }
      const getClientDetails = async () =>{
        const url = "https://webhrapi.comakeit.net/api/clientdetails";
        console.log(token[0])
        const response = await fetch(url, {
            // mode:'no-cors',
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
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
            "Authorization": `Bearer ${token[0]}`
          }
        });
        const json = await response.json()
        console.log(json);
        setmanagerData(json.data);
      }
    return(
        <AuthContext.Provider value={{clientData, managerData, authStatus, authFunc ,getKeyAndToken, getClientDetails, getManagerDetails}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;