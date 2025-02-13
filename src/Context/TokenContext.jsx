
import { createContext, useEffect, useState } from "react";


export let TokenContext = createContext();


// eslint-disable-next-line react/prop-types
export default function TokenProvider({ children }) {
    const [token, setToken] = useState();

    function checkLoggedIn(){
        if(localStorage.getItem("userToken")){
            setToken(localStorage.getItem("userToken"));
        }
    }
    useEffect(()=>{
        checkLoggedIn();
    },[])

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    );
}