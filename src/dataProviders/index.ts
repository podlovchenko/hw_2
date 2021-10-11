import { BuildStatus, IBuild } from '../types/build';
import { FormData, IFormField } from '../types/form';
import { ISettings } from '../types/settings';

const mockBuilds = [
    {
        id: 1368,
        name: 'add documentation for postgres scaler',
        status: BuildStatus.Done,
        branch: 'master',
        hash: '9c9f0b9',
        author: {
            id: 1,
            name: 'Philip Kirkorov',
        },
        tsStart: Date.now() - 1000000,
        tsEnd: Date.now() - 1000000,
    },
    {
        id: 1360,
        name: 'add documentation for postgres scaler',
        status: BuildStatus.Fail,
        branch: 'master',
        hash: '9c9f0b9',
        author: {
            id: 1,
            name: 'Philip Kirkorov',
        },
        tsStart: Date.now() - 1000000,
        tsEnd: Date.now() - 1000000,
    },
    {
        id: 1369,
        name: 'add documentation for postgres scaler',
        status: BuildStatus.Pending,
        branch: 'master',
        hash: '9c9f0b9',
        author: {
            id: 1,
            name: 'Philip Kirkorov',
        },
        tsStart: Date.now() - 1000000,
        tsEnd: Date.now() - 1000000,
    },
];

export const getSettings = (): Promise<ISettings> =>
    new Promise((resolve, reject) => {
        if (localStorage.settings) {
            resolve(JSON.parse(localStorage.settings));
        } else {
            reject();
        }
    });

export const getBuilds = (id: number): Promise<IBuild[]> =>
    new Promise((resolve) => {
        resolve(JSON.parse(localStorage.builds));
    });

export const submitSettings = (data: FormData) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                const settings = {
                    id: 1,
                    title: data[IFormField.Repository],
                    ...data,
                };

                localStorage.settings = JSON.stringify(settings);
                localStorage.builds = JSON.stringify(mockBuilds);

                resolve(settings);
            } else {
                reject();
            }
        }, 3000);
    });

export const showMoreBuilds = () => {};
