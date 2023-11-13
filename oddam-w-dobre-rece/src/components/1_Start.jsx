import React from 'react';
import {NavLog} from "./Nav_log.jsx";
import '../scss/start.scss';
import '../scss/heading.scss';
import '../scss/button.scss';
import {NavMain} from "./Nav_main.jsx";
import {Heading} from "./Heading.jsx";
import {Button} from "./Button.jsx";
import {Link} from "react-router-dom";

export const Start = () => {

    return (
        <section id="start" className="header">
                   <div className="header_photo"/>
            <div className="header_right">
                <div className="header_nav">
                    <NavLog />
                    <NavMain />
                </div>
                <div className="header_text">
                    <Heading> Zacznij pomagać! <br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </Heading>
                    <div className="button_container">
                        <Link to="/logowanie" className="button_container border btn">
                            Oddaj <br/>
                            rzeczy
                        </Link>
                        <Link to="/logowanie" className="button_container border btn">
                            Zgłoś <br/>
                            zbiórkę
                        </Link>
                    </div>
                </div>
            </div>

        </section>

    )
};