import React, { FC } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    customField: string;
};

const Input: FC<Props> = ({ onChange, value, placeholder }) => {
    return (
        <input onChange={onChange} value={value} placeholder={placeholder} />
    );
}

export default Input;
