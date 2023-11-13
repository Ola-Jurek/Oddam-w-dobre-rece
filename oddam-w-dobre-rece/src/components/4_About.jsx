import React from 'react';
import {Heading} from "./Heading.jsx";
import '../scss/about.scss';

export const About = (props) => {
    return (
        <div id="about">

            <div className="about_text">
                <Heading> O nas </Heading>
                <div className="about_info">
                    <p> Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. </p>
                    <div className="signature"/>
                </div>
            </div>
            <div className="about_photo"/>
        </div>
    );
}
