import { Navigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export default function ProtectedRoutes({children}){



    if(localStorage.getItem("userToken")){
        return children
    }else{
       return <Navigate to={"/login"}></Navigate>
    }

}