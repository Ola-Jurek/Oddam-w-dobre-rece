import React from 'react';
import '../scss/start.scss';

export const Button = ({children}, props) => {
    return (
        <div className="button_container">
            <div className="border">
                <a style={props.style} className="btn">{children} </a>
            </div>
        </div>
    );
}
