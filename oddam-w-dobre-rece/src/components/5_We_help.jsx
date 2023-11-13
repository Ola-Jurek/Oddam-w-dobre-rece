import React from 'react';
import {Heading} from "./Heading.jsx";
import '../scss/heading.scss';
import {ButtonBig} from "./Button_big.jsx";
import '../scss/start.scss';
import '../scss/we_help.scss';

export const WeHelp = (props) => {
    return (
        <div id="we_help">
            <Heading> Komu pomagamy? </Heading>
            <ButtonBig id="fundacje" className="we_help_btn"> Fundacjom </ButtonBig>
            <ButtonBig id="organizacje" className="we_help_btn" > Organizacjom pozarządowym </ButtonBig>
            <ButtonBig id="zbiorki" className="we_help_btn"> Lokalnym zbiórkom</ButtonBig>
        </div>
    );
}
