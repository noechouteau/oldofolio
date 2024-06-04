import React from 'react';

type LiProps = {
    children: React.ReactNode;
    id: string;
    classNa: string;
    onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

function LiHome({children, id, onClick, classNa}: LiProps) {
    return (
        <li id={id} className={classNa} onClick={onClick}>{children}</li>
    );
    }

export default LiHome;