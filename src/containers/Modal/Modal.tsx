import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

interface IProps {
    title: string;
    description: string;
    buttons: React.ReactNode;
    children: React.ReactNode;
}

export const Modal = ({ title, description, buttons, children }: IProps) => {
    const container = document.getElementById('modal');

    return container
        ? ReactDOM.createPortal(
              <div className={classes.wrapper}>
                  <div className={classes.container}>
                      <div className={classes.header}>{title}</div>
                      <div className={classes.description}>{description}</div>
                      {children}
                      <div className={classes.buttons}>{buttons}</div>
                  </div>
              </div>,
              container
          )
        : null;
};
