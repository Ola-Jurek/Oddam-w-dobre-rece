import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../scss/start.scss';
import {LogIn} from "./Log_in.jsx";
import {CreateAccount} from "./Create_account.jsx";


export const NavLog = () => {
    const [isFormLogVisible, setIsFormLogVisible] = useState(false);
    const [isFormCreateVisible, setIsFormCreateVisible] = useState(false);


    return (
        <div className="nav_log">
            {!isFormLogVisible && (
                <Link to="/logowanie" className="button_small" > Zaloguj </Link>
            )}
            {isFormLogVisible && (
                <LogIn/>
            )}
            {!isFormCreateVisible && (
                <Link to="/rejestracja" className="button_small"> Załóż konto </Link>
            )}
            {isFormCreateVisible && (
                <CreateAccount/>
            )}
        </div>

    );
}
