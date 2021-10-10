import React, { useEffect, useState } from 'react';

import { getSettings } from '../../dataProviders';
import { ISettings } from '../../types/settings';
import BuildsHistoryPage from '../BuildsHistoryPage/BuildsHistoryPage';
import StartPage from '../StartPage/StartPage';

const MainPage = () => {
    const [settings, setSettings] = useState<ISettings | undefined>(undefined);
    useEffect(() => {
        (async () => {
            try {
                const settings: ISettings = await getSettings();

                if (settings) {
                    setSettings(settings);
                }
            } catch {}
        })();
    }, []);

    return settings ? <BuildsHistoryPage settings={settings} /> : <StartPage />;
};

export default MainPage;
