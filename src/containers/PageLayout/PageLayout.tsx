import React from 'react';

import classes from './PageLayout.module.css';

interface IProps {
    contentClassName?: string;
    children: React.ReactNode;
    title: React.ReactNode;
    buttons?: React.ReactNode;
}

const PageLayout = ({ contentClassName, children, title, buttons }: IProps) => (
    <div className={classes.container}>
        <div className={classes.header}>
            <div>{title}</div>
            {buttons && <div className={classes.buttons}>{buttons}</div>}
        </div>
        <div className={contentClassName || classes.content}>{children}</div>
    </div>
);

export default PageLayout;
