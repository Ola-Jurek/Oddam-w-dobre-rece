import React from 'react';

// const startClick = () => {
//     history.push('/'); // Przenieś użytkownika na stronę główną
//     const startElement = document.getElementById('start');
//     if (startElement) {
//         startElement.scrollIntoView({ behavior: 'smooth' }); // Przewiń do elementu #start
//     }
// };


export const NavMain = () => {
    return (
        <div className="nav_main">
            <a href="/#start" className="button_big" > Start </a>
            <a href="/#instruction" className="button_big" > O co chodzi? </a>
            <a href="#about" className="button_big"> O nas </a>
            <a href="#we_help" className="button_big"> Fundacje i organizacje </a>
            <a href="#contact" className="button_big">Kontakt</a>
        </div>
    );
}