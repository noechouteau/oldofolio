import React from 'react';

type ImageProps = {
    id: string;
    src: string;
}
function Image({id, src}: ImageProps) {
    return (
        <img id={id} src={src} />
    );
    }
export default Image