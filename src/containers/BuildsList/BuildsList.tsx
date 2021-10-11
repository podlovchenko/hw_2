import React from 'react';

import Button from '../../components/Button/Button';
import SmallButton from '../../components/SmallButton/SmallButton';
import { SHOW_MORE } from '../../constants/text';
import BuildCard from '../../containers/BuildCard/BuildCard';
import { IBuild } from '../../types/build';
import classes from './BuildsList.module.css';

interface IProps {
    builds: IBuild[];
    onShowMore: () => void;
}

const BuildsList = ({ builds, onShowMore }: IProps) => {
    return (
        <div className={classes.container}>
            {builds.map((build) => (
                <BuildCard key={build.id} {...build} />
            ))}
            <div className={classes.smallButton}>
                <SmallButton onClick={onShowMore}>{SHOW_MORE}</SmallButton>
            </div>
            <Button
                className={classes.bigButton}
                variant="gray"
                onClick={onShowMore}
            >
                {SHOW_MORE}
            </Button>
        </div>
    );
};

export default BuildsList;
