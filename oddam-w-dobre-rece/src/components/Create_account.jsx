import React from 'react';
import {Link} from "react-router-dom";
import {NavLog} from "./Nav_log.jsx";
import {NavMain} from "./Nav_main.jsx";
import {Heading} from "./Heading.jsx";
import '../scss/log_form.scss';

export const CreateAccount = () => {

    return (
        <>
        <div className="nav">
            <NavLog className="nav_log"/>
            <NavMain className="nav_main"/>
        </div>
            <section className="log">
                <Heading> Załóż konto </Heading>
                <form className="log_form">
                    <label className="log_label"> Email
                        <input className="log_input"/>
                    </label>
                    <label className="log_label"> Hasło
                        <input className="log_input"/>
                    </label>
                    <label className="log_label"> Powtórz hasło
                        <input className="log_input"/>
                    </label>
                </form>
                    <div className="log_buttons">
                        <Link to="/" className="log_btn"> Zaloguj się  </Link>
                        <Link to="/" className="log_btn"> Załóż konto </Link>
                    </div>
            </section>
        </>
    );
}
