import { IFormField } from '../types/form';

export const TITLE = 'School CI server';
export const OPEN_SETTINGS = 'Open settings';
export const SAVE = 'Save';
export const CANCEL = 'Cancel';
export const SHOW_MORE = 'Show more';
export const SETTINGS = 'Settings';
export const SETTINGS_DESCRIPTION =
    'Configure repository connection and synchronization settings.';
export const NEW_BUILD = 'New build';
export const NEW_BUILD_DESCRIPTION = 'Enter the commit which you want to build';
export const RUN_BUILD = 'Run build';
export const COMMIT_HASH = 'Commit hash';

export const FIELDS = {
    [IFormField.Repository]: {
        label: 'GitHub repository',
        placeholder: 'user-name/repo-name',
    },
    [IFormField.Command]: {
        label: 'Build command',
        placeholder: 'npm ci && npm run build',
    },
    [IFormField.Branch]: {
        label: 'Main branch',
        placeholder: 'master',
    },
    [IFormField.Time]: {
        label: 'Synchronize every',
        placeholder: 'Synchronize every',
        dimension: 'minutes',
    },
};
