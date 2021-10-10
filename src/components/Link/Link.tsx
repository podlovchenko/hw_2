import React from 'react';
import { Link } from 'react-router-dom';

import { Path } from '../../constants/path';
import classes from './Link.module.css';

export interface IProps {
    to: Path;
    children: React.ReactNode;
}

const MyLink = (props: IProps) => {
    const { to, children } = props;

    return (
        <Link to={to} className={classes.link}>
            {children}
        </Link>
    );
};

export default MyLink;
