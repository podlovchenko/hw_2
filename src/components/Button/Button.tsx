import classNames from 'classnames';
import React from 'react';

import classes from './Button.module.css';

export interface IProps {
    className?: string;
    variant: 'yellow' | 'gray';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
}

const Button = (props: IProps) => {
    const { variant, disabled, onClick, children, className } = props;

    const buttonClassName = classNames(
        className,
        classes.container,
        classes[variant],
        {
            [classes.disabled]: disabled,
        }
    );

    return (
        <button
            type="button"
            className={buttonClassName}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
