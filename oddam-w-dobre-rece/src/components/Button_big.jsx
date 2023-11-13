import React from 'react';
import '../scss/start.scss';

export const ButtonBig = ({children},props) => {
    return (
        <button className="button_big"> {children}</button>
    );
}
