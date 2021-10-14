import React from 'react';
import { Route } from 'react-router-dom';

import classes from './App.module.css';
import { Path } from './constants/path';
import { COPYRIGHT, LEARNING, SUPPORT, VERSION } from './constants/text';
import Footer from './containers/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

const App = () => {
    return (
        <div className={classes.container}>
            <Route exact path={Path.Main} component={MainPage} />
            <Route exact path={Path.Settings} component={SettingsPage} />
            <Footer
                links={[
                    {
                        path: Path.Main,
                        text: SUPPORT,
                    },
                    {
                        path: Path.Main,
                        text: LEARNING,
                    },
                    {
                        path: Path.Main,
                        text: VERSION,
                    },
                ]}
                copyright={COPYRIGHT}
            />
        </div>
    );
};

export default App;
