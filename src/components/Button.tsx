import * as React from 'react';

type ButtonType = {
    title: string
    callback: () => void
};

export const Button = ({title, callback} : ButtonType) => {

    const onCLickButtonHandler = () => {
        callback()
    }

    return (
        <button onClick={onCLickButtonHandler}>{title}</button>
    )
};
