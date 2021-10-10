import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { IconType } from '../../components/Icon/Icon';
import SmallButton from '../../components/SmallButton/SmallButton';
import Title from '../../components/Title/Title';
import { Path } from '../../constants/path';
import BuildsList from '../../containers/BuildsList/BuildsList';
import PageLayout from '../../containers/PageLayout/PageLayout';
import { getBuilds, showMoreBuilds } from '../../dataProviders';
import { IBuild } from '../../types/build';
import { ISettings } from '../../types/settings';

interface IProps {
    settings: ISettings;
}

const BuildsHistoryPage = ({ settings }: IProps) => {
    const history = useHistory();
    const onOpenSettings = () => {
        history.push(Path.Settings);
    };

    const [builds, setBuilds] = useState<IBuild[]>([]);
    useEffect(() => {
        (async () => {
            const builds: IBuild[] = await getBuilds(settings.id);

            if (settings) {
                setBuilds(builds);
            }
        })();
    }, [settings]);

    return (
        <PageLayout
            title={<Title variant="gray">{settings.title}</Title>}
            buttons={
                <>
                    <SmallButton iconType={IconType.Play} onClick={() => {}}>
                        Run build
                    </SmallButton>
                    <SmallButton
                        iconType={IconType.Settings}
                        onClick={onOpenSettings}
                    />
                </>
            }
        >
            <BuildsList builds={builds} onShowMore={showMoreBuilds} />
        </PageLayout>
    );
};

export default BuildsHistoryPage;
