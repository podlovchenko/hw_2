import classNames from 'classnames';
import React from 'react';

import classes from './Icon.module.css';
import { IconType, typeComponentMap } from './types';

interface IProps {
    className?: string;
    type: IconType;
    onClick?: () => void;
}

class Icon extends React.PureComponent<IProps> {
    renderIcon = () => {
        const IconComponent = typeComponentMap[this.props.type];

        return <IconComponent />;
    };

    render() {
        const className = classNames(this.props.className, classes.container);

        return (
            <span className={className} onClick={this.props.onClick}>
                {this.renderIcon()}
            </span>
        );
    }
}

export default Icon;
export { IconType };
