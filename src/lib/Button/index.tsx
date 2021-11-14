import React from 'react';
import '../calendar.css';

interface Buttonprops {
    children: JSX.Element | string | (JSX.Element | string)[] | JSX.Element[],
    onClick: () => void,
    theme?: string,
}

export const Button = (buttonProps: Buttonprops) : JSX.Element => {
    return <button type="button" onClick={buttonProps.onClick} className={`flex font btn}`}>
        {buttonProps.children}
    </button>
}