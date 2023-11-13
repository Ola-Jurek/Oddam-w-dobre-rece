import React from 'react';
import {Link} from "react-router-dom";
import {NavLog} from "./Nav_log.jsx";
import {NavMain} from "./Nav_main.jsx";
import {Heading} from "./Heading.jsx";
import '../scss/start.scss';
import '../scss/log_form.scss';

export const LogOut = () => {

    return (
        <>
            <div className="nav">
                <NavLog className="nav_log"/>
                <NavMain className="nav_main"/>
            </div>
            <section className="log">
                <Heading> Wylogowanie nastąpiło<br/>
                    pomyślnie
                </Heading>
                <div className="log_buttons_out">
                    <Link to="/" className="log_btn"  > Strona główna </Link>
                </div>
            </section>
        </>
    );
}