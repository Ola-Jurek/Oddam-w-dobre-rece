import React from 'react';
import '../scss/heading.scss';

export const Heading = ({children}) => {
    return (
        <div className="heading">
            <div className="heading_text">{children}</div>
            <div className="decoration"/>
        </div>
    );
}
