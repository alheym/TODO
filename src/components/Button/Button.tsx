import React, { FC } from 'react';

type OwnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type Props = OwnProps;

export const Button: FC<Props> = ({ onClick, children }) => (
    <button onClick={onClick}>
        {children}
    </button>
)
export default Button;
