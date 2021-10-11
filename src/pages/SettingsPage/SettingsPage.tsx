import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Title from '../../components/Title/Title';
import { Path } from '../../constants/path';
import { TITLE } from '../../constants/text';
import PageLayout from '../../containers/PageLayout/PageLayout';
import SettingsForm from '../../containers/SettingsForm/SettingsForm';
import {
    getSettingsAsync,
    selectSettings,
    selectStatus,
    submitSettingsAsync,
} from '../../reducers/repository';
import { FormData } from '../../types/form';

const SettingsPage = () => {
    const dispatch = useAppDispatch();
    const settings = useAppSelector(selectSettings);
    const status = useAppSelector(selectStatus);
    useEffect(() => {
        dispatch(getSettingsAsync());
    }, [dispatch]);

    const history = useHistory();
    const onOpenMain = useCallback(() => {
        history.push(Path.Main);
    }, [history]);

    const onSubmit = (data: FormData) => dispatch(submitSettingsAsync(data));

    return (
        <PageLayout title={<Title variant="gray">{TITLE}</Title>}>
            <SettingsForm
                status={status}
                settings={settings}
                onSubmit={onSubmit}
                onCancel={onOpenMain}
                onRedirect={onOpenMain}
            />
        </PageLayout>
    );
};

export default SettingsPage;
