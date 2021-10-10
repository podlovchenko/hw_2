import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getSettingsAsync, selectSettings } from '../../reducers/repository';
import BuildsHistoryPage from '../BuildsHistoryPage/BuildsHistoryPage';
import StartPage from '../StartPage/StartPage';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const settings = useAppSelector(selectSettings);
    useEffect(() => {
        dispatch(getSettingsAsync());
    }, [dispatch]);

    return settings ? <BuildsHistoryPage settings={settings} /> : <StartPage />;
};

export default MainPage;
