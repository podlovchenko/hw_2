import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Title from '../../components/Title/Title';
import { Path } from '../../constants/path';
import { TITLE } from '../../constants/text';
import PageLayout from '../../containers/PageLayout/PageLayout';
import SettingsForm from '../../containers/SettingsForm/SettingsForm';
import { getSettings, submitSettings } from '../../dataProviders';
import { ISettings } from '../../types/settings';

const SettingsPage = () => {
    const [settings, setSettings] = useState<ISettings | undefined>(undefined);
    useEffect(() => {
        (async () => {
            try {
                const settings: ISettings = await getSettings();

                console.log(settings);
                if (settings) {
                    setSettings(settings);
                }
            } catch {}
        })();
    }, []);

    const history = useHistory();
    const onOpenMain = useCallback(() => {
        history.push(Path.Main);
    }, [history]);

    return (
        <PageLayout title={<Title variant="gray">{TITLE}</Title>}>
            <SettingsForm
                settings={settings}
                onSubmit={submitSettings}
                onCancel={onOpenMain}
                onRedirect={onOpenMain}
            />
        </PageLayout>
    );
};

export default SettingsPage;
