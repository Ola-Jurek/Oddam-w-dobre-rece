import React from 'react';
import {Link} from "react-router-dom";
import {Heading} from "./Heading.jsx";
import '../scss/heading.scss';
import '../scss/instruction.scss';
import {Button} from "./Button.jsx";
import '../scss/button.scss';
import icon1 from "../assets/Icon 4.png";
import icon2 from "../assets/Icon 3.png";
import icon3 from "../assets/Icon 2.png";
import icon4 from "../assets/Icon.png";

export const Instruction = () => {

    const buttonStyle = {
        border: '2px solid pink',
    }

    return (
        <div id="instruction">
            <Heading> Wystarczą 4 proste kroki </Heading>

            <div className="instruction">
                <div className="column">
                    <img src={icon1} className="icon"/>
                    <p className="instruction_info"> Wybierz rzeczy </p>
                    <div className="black_line"/>
                    <p className="instruction_description"> ubrania, zabawki, sprzęt i inne </p>
                </div>
                <div className="column">
                    <img src={icon2} className="icon"/>
                    <p className="instruction_info"> Spakuj je </p>
                    <div className="black_line"/>
                    <p className="instruction_description"> skorzystaj z worków na śmieci </p>
                </div>
                <div className="column">
                    <img src={icon3} className="icon"/>
                    <p className="instruction_info"> Zdecyduj komu chcesz pomóc </p>
                    <div className="black_line"/>
                    <p className="instruction_description"> wybierz zaufane miejsce </p>
                </div>
                <div className="column">
                    <img src={icon4} className="icon"/>
                    <p className="instruction_info"> Zamów kuriera </p>
                    <div className="black_line"/>
                    <p className="instruction_description"> kurier przyjedzie w dowolnym terminie </p>
                </div>
            </div>
            <div className="button_container">
                 <Link to="/logowanie" className="button_container border btn">
                    Oddaj <br/>
                    rzeczy
                </Link>
            </div>
        </div>
    );
}
