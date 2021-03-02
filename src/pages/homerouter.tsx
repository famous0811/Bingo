import React,{ useRef, useState, useCallback, useEffect} from 'react';

import Home from './home';

import {useHistory} from "react-router-dom";

function Homerouter() {
    const History=useHistory();

    useEffect(()=>{
        // History.replace("/404");
    },[]);

    const GoHistory=useCallback(()=>{
        History.replace("/history");
    },[]);
    
    const GoRoule=useCallback(()=>{
        History.replace("/Roul");
    },[]);

    const GoMake=useCallback(()=>{
        History.replace("/Make");
    },[]);


    return (
        <Home GoHistory={GoHistory} GoRoule={GoRoule} GoMake={GoMake}/>
    );
}

export default Homerouter;