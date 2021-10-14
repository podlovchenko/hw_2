import React from 'react';

import Link from '../../components/Link/Link';
import { ILink } from '../../types/link';
import classes from './Footer.module.css';

interface IProps {
    links: ILink[];
    copyright: string;
}

const Footer: React.FC<IProps> = ({ links, copyright }) => (
    <div className={classes.container}>
        <div className={classes.leftContainer}>
            {links.map(({ path, text }: ILink) => (
                <Link to={path}>{text}</Link>
            ))}
        </div>
        <div className={classes.copyright}>{copyright}</div>
    </div>
);

export default Footer;
