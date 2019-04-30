import React from 'react';
import './Button.scss';

const Button = ({ children, onClick, variant }) => (
    <button className={`Button Button--${variant}`} onClick={onClick}>
        {children}
    </button>
);

Button.defaultProps = {
    variant: 'default'
};

export default Button;
