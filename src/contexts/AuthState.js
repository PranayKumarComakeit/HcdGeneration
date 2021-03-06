import React, {useState} from "react";
import AuthContext from "./authContext";

const AuthState = (props) =>{
    const [clientData, setclientData] = useState([]);
    const [managerData, setmanagerData] = useState([]);
    const [authData, setauthData] = useState();
    const [key, setkey] = useState([]);
    const [token, settoken] = useState([]);

    const getKeyAndToken = async () => {
        //Api call
        const url = window.location.href;

        let paramString = url.split('?')[1];

        const urlParams = new URLSearchParams(paramString);
        const keyFromURL = urlParams.get('key');
        key.unshift(keyFromURL)

        setkey(key)
        const tokenFromURL = urlParams.get('token');
        token.unshift(tokenFromURL)

        settoken(token)

      };

      const authFunc = async () =>{
        getKeyAndToken();
        const authUrl = `https://webhrapi.comakeit.net/api/checkhcdarglink?key=${key[0]}`;

        const response = await fetch(authUrl, {
            // mode:'no-cors',
          method: "GET",
          headers: {

            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
          }
        });

        const json = await response.json()

        setauthData(json.status)

      }


      const getClientDetails = async () =>{
        const url = "https://webhrapi.comakeit.net/api/clientdetails";

        const response = await fetch(url, {
            // mode:'no-cors',
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
          }
        });
        const json = await response.json()

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

        setmanagerData(json.data);
      }
    return(

        <AuthContext.Provider value={{clientData, managerData, authData, authFunc ,getKeyAndToken, getClientDetails, getManagerDetails}}>

            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;