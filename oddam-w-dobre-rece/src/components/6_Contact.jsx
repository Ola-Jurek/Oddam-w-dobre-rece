import React from 'react';
import background from '../assets/Background Image.png';
import '../scss/contact.scss';
import {Heading} from "./Heading.jsx";
import {useState} from "react";

export const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");


    return (
        <div id="contact">
            <div className="contact_background"/>
            <section className="contact_overlay">
                <div className="contact_text">
                    <Heading> Skontaktuj się z nami </Heading>
                    <div className="contact_form">
                        <label> Wpisz swoje imię
                            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                        </label>
                        <label> Wpisz swój e-mail
                            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </label>
                        <label> Wpisz swoją wiadomość
                            <input type="message" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </label>
                    </div>

                </div>
            </section>

        </div>
    );
}