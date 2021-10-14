import classNames from 'classnames';
import React from 'react';

import classes from './Button.module.css';

export interface IProps {
    className?: string;
    variant: 'yellow' | 'gray';
    size?: 'sm' | 'md';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<IProps> = (props) => {
    const {
        variant,
        disabled,
        onClick,
        children,
        className,
        size = 'md',
    } = props;

    const buttonClassName = classNames(
        className,
        classes.container,
        classes[size],
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
