import classNames from 'classnames';
import React, { useState, useCallback } from 'react';
import InputMask from 'react-input-mask';

import Icon, { IconType } from '../Icon/Icon';
import classes from './Input.module.css';

export interface IProps {
    type: 'text' | 'number';
    value: string;
    placeholder: string;
    required?: boolean;
    onChange: (value: string) => void;
    onClear?: () => void;
}

const Input = (props: IProps) => {
    const { type, value, placeholder, required, onChange, onClear } = props;

    const [focused, setFocused] = useState(false);

    const handleFocus = useCallback(() => {
        setFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
        setFocused(false);
    }, []);

    const handleChange = useCallback(
        (event) => {
            onChange(event.target.value);
        },
        [onChange]
    );

    const isNumberType = type === 'number';
    const className = classNames(classes.container, {
        [classes.focused]: focused,
        [classes.isNumberType]: isNumberType,
    });

    return (
        <div className={className}>
            {!isNumberType && (
                <>
                    <input
                        className={classes.input}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        required={required}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {Boolean(value) && (
                        <Icon
                            className={classes.close}
                            type={IconType.Clear}
                            onClick={onClear}
                        />
                    )}
                </>
            )}
            {isNumberType && (
                <InputMask
                    className={classes.input}
                    value={value}
                    required={required}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    mask="999"
                />
            )}
        </div>
    );
};

export default Input;
