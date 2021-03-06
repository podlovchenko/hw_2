import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Icon, { IconType } from '../../components/Icon/Icon';
import SmallButton from '../../components/SmallButton/SmallButton';
import Title from '../../components/Title/Title';
import { Path } from '../../constants/path';
import {
    SETTINGS_DESCRIPTION,
    OPEN_SETTINGS,
    TITLE,
} from '../../constants/text';
import PageLayout from '../../containers/PageLayout/PageLayout';
import classes from './StartPage.module.css';

const StartPage = () => {
    const history = useHistory();
    const onOpenSettings = () => {
        history.push(Path.Settings);
    };

    return (
        <PageLayout
            contentClassName={classes.content}
            title={<Title variant="gray">{TITLE}</Title>}
            buttons={
                <SmallButton
                    iconType={IconType.Settings}
                    onClick={onOpenSettings}
                >
                    Settings
                </SmallButton>
            }
        >
            <div className={classes.container}>
                <Icon type={IconType.Tools} />
                <div className={classes.description}>
                    {SETTINGS_DESCRIPTION}
                </div>
                <Button variant="yellow" onClick={onOpenSettings}>
                    {OPEN_SETTINGS}
                </Button>
            </div>
        </PageLayout>
    );
};

export default StartPage;
