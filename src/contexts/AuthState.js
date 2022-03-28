import React from "react";
import AuthContext from "./authContext";

const AuthState = (props) =>{
    const state = {
        "name": "Ak",
        "class": "1D"
    }
    const getKeyAndToken = async () => {
        //Api call
        const url = 'http://localhost:3000/?key=MjAyMi0wMy0yNSAxNDo1MDozOC1fLV80Ny1fLV9hWXpRR005enJz&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dlYmhyXC8iLCJhdWQiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dlYmhyXC8iLCJqdGkiOiI0ZjFnMjNhMTJhYSIsImlhdCI6MTY0ODIwMDAzOCwiZXhwIjoxNjQ4MjAzNjM4LCJ1aWQiOjEwMCwidXNlcmlkIjoxNTEsInJvbGVpZCI6NX0.tqIjnOwqPQyGkn5EHeGF3JjDKObGB_Wk_roNKANZAOE';
        //for dynamic url we will use window.location.search() like below
//         const queryString = window.location.search;
// console.log(queryString);
// // ?product=shirt&color=blue&newuser&size=m
        let paramString = url.split('?')[1];
        // console.log(paramString)
        const urlParams = new URLSearchParams(paramString);
        const key = urlParams.get('key');
        console.log(key)
        const token = urlParams.get('token');
        console.log(token)
      };
    return(
        <AuthContext.Provider value={{getKeyAndToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;