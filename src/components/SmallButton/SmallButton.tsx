import classNames from 'classnames';
import React from 'react';

import Icon from '../Icon/Icon';
import { IconType } from '../Icon/types';
import classes from './SmallButton.module.css';

export interface IProps {
    iconType?: IconType;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
}

const SmallButton = (props: IProps) => {
    const { iconType, onClick, children } = props;

    return (
        <button type="button" className={classes.container} onClick={onClick}>
            {iconType && <Icon type={iconType} className={classes.icon} />}
            {children && (
                <span
                    className={classNames(classes.text, {
                        [classes.hasTwoElements]: Boolean(iconType),
                        [classes.hidden]: Boolean(iconType),
                    })}
                >
                    {children}
                </span>
            )}
        </button>
    );
};

export default SmallButton;
