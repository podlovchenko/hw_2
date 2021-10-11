import classNames from 'classnames';
import React from 'react';

import classes from './Title.module.css';

export interface IProps {
    variant: 'black' | 'gray';
    children: React.ReactNode;
}

const Title = (props: IProps) => {
    const { variant, children } = props;

    const className = classNames(classes.title, classes[variant]);

    return <span className={className}>{children}</span>;
};

export default Title;
