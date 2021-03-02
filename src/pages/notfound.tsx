import React from 'react';

interface ErrorProps{
    errorText: string;
}
function notfound({errorText}:ErrorProps) {
    return (
        <div>
            {errorText}
        </div>
    );
}

export default notfound;