import React from 'react';

import Link from '../../components/Link/Link';
import { Path } from '../../constants/path';
import classes from './Footer.module.css';

const Footer = () => (
    <div className={classes.container}>
        <div className={classes.leftContainer}>
            <Link to={Path.Main}>Support</Link>
            <Link to={Path.Main}>Learning</Link>
            <Link to={Path.Main}>Русская версия</Link>
        </div>
        <Link to={Path.Main}>© 2020 Your Name</Link>
    </div>
);

export default Footer;
