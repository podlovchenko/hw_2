import classNames from 'classnames';
import React from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { IconType } from '../Icon/types';
import classes from './ButtonWithIcon.module.css';

export interface IProps {
    iconType?: IconType;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const ButtonWithIcon: React.FC<IProps> = (props) => {
    const { iconType, onClick, children } = props;

    return (
        <Button size="sm" variant="gray" onClick={onClick}>
            <div className={classes.container}>
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
            </div>
        </Button>
    );
};

export default ButtonWithIcon;
