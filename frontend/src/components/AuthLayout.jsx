import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function AuthLayout({children, authentication = true}){

    const authStatus = useSelector(state => state.auth.status);
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();

    useEffect( () => {
        if(authentication && authStatus !== authentication){
            navigate('/login');
        }else{
            
        }
        setLoader(false)
    },[authStatus,navigate, authentication]);

    return loader ? <h1>loading....</h1> : <>{children}</>
}