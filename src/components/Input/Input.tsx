import React, { FC } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    customField: string;
};

const Input: FC<Props> = ({ onChange, value }) => {
    return (
        <input onChange={onChange} value={value} />
    );
}

export default Input;
