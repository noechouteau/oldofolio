import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    id: string;
    onHover: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClic: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onLeave: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ButtonHome({children, id, onHover,onClic, onLeave}: ButtonProps) {
    return (
        <button id={id} onMouseOver={onHover} onClick={onClic} onMouseLeave={onLeave}>{children}</button>
    );
    }

export default ButtonHome;