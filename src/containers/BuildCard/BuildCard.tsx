import classNames from 'classnames';
import React from 'react';

import Icon, { IconType } from '../../components/Icon/Icon';
import { BuildStatus, IBuild } from '../../types/build';
import { getDate, getTime } from '../../utils/parseDate';
import classes from './BuildCard.module.css';

interface IProps extends IBuild {}

const BuildCard = (props: IProps) => {
    const {
        id,
        name,
        status,
        branch,
        hash,
        author: { name: authorName },
        tsStart,
        tsEnd,
    } = props;
    const iconType =
        status === BuildStatus.Done
            ? IconType.Done
            : status === BuildStatus.Fail
            ? IconType.Fail
            : IconType.Clock;

    return (
        <div className={classes.container}>
            <div className={classes.status}>
                <Icon
                    type={iconType}
                    className={classNames({
                        [classes[status]]: true,
                    })}
                />
            </div>
            <div className={classes.header}>
                <div>
                    <span
                        className={classNames(classes.id, {
                            [classes[status]]: true,
                        })}
                    >{`#${id}`}</span>
                </div>
                <span>{name}</span>
            </div>
            <div className={classes.description}>
                <div className={classes.block}>
                    <Icon type={IconType.CodeCommit} className={classes.icon} />
                    <span>{branch}</span>
                    <span className={classes.hash}>{hash}</span>
                </div>
                <div className={classes.block}>
                    <Icon type={IconType.User} className={classes.icon} />
                    <span>{authorName}</span>
                </div>
            </div>
            <div className={classes.date}>
                <Icon type={IconType.Calendar} className={classes.icon} />
                <span>{getDate(tsEnd)}</span>
            </div>
            <div className={classes.time}>
                <Icon type={IconType.Timer} className={classes.icon} />
                <span>{getTime(tsEnd - tsStart)}</span>
            </div>
        </div>
    );
};

export default BuildCard;
