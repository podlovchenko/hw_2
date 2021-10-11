import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../components/Button/Button';
import { IconType } from '../../components/Icon/Icon';
import Input from '../../components/Input/Input';
import SmallButton from '../../components/SmallButton/SmallButton';
import Title from '../../components/Title/Title';
import { Path } from '../../constants/path';
import {
    CANCEL,
    NEW_BUILD,
    NEW_BUILD_DESCRIPTION,
    RUN_BUILD,
    COMMIT_HASH,
} from '../../constants/text';
import BuildsList from '../../containers/BuildsList/BuildsList';
import { Modal } from '../../containers/Modal/Modal';
import PageLayout from '../../containers/PageLayout/PageLayout';
import { showMoreBuilds } from '../../dataProviders';
import { getBuildsAsync, selectBuilds } from '../../reducers/repository';
import { ISettings } from '../../types/settings';

interface IProps {
    settings: ISettings;
}

const BuildsHistoryPage = ({ settings }: IProps) => {
    const history = useHistory();
    const onOpenSettings = () => {
        history.push(Path.Settings);
    };

    const dispatch = useAppDispatch();
    const builds = useAppSelector(selectBuilds);
    useEffect(() => {
        dispatch(getBuildsAsync(settings.id));
    }, [dispatch, settings]);

    const [commitHash, setCommitHash] = useState('');
    const onChangeCommitHash = useCallback(
        (value: string) => setCommitHash(value),
        []
    );
    const onClearCommitHash = useCallback(() => setCommitHash(''), []);

    const [opened, setOpened] = useState(false);
    const onOpenModal = useCallback(() => setOpened(true), []);
    const onCloseModal = useCallback(() => {
        setOpened(false);
        onClearCommitHash();
    }, [onClearCommitHash]);

    return (
        <PageLayout
            title={<Title variant="gray">{settings.title}</Title>}
            buttons={
                <>
                    <SmallButton iconType={IconType.Play} onClick={onOpenModal}>
                        {RUN_BUILD}
                    </SmallButton>
                    <SmallButton
                        iconType={IconType.Settings}
                        onClick={onOpenSettings}
                    />
                </>
            }
        >
            <BuildsList builds={builds} onShowMore={showMoreBuilds} />
            {opened && (
                <Modal
                    title={NEW_BUILD}
                    description={NEW_BUILD_DESCRIPTION}
                    buttons={
                        <>
                            <Button variant="yellow" onClick={onCloseModal}>
                                {RUN_BUILD}
                            </Button>
                            <Button variant="gray" onClick={onCloseModal}>
                                {CANCEL}
                            </Button>
                        </>
                    }
                >
                    <Input
                        type="text"
                        value={commitHash}
                        placeholder={COMMIT_HASH}
                        required
                        onChange={onChangeCommitHash}
                        onClear={onClearCommitHash}
                    />
                </Modal>
            )}
        </PageLayout>
    );
};

export default BuildsHistoryPage;
