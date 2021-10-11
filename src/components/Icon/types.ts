import { ElementType } from 'react';

import {
    CalendarIcon,
    ClearIcon,
    ClockIcon,
    CodeCommitIcon,
    DoneIcon,
    FailIcon,
    PlayIcon,
    RebuildIcon,
    SettingsIcon,
    TimerIcon,
    ToolsIcon,
    UserIcon,
} from './assets';

export enum IconType {
    Calendar = 'calendar',
    Clear = 'clear',
    Clock = 'clock',
    CodeCommit = 'code_commit',
    Done = 'done',
    Fail = 'fail',
    Play = 'play',
    Rebuild = 'rebuild',
    Settings = 'settings',
    Timer = 'timer',
    Tools = 'tools',
    User = 'user',
}

interface ITypeComponentMap {
    [key: string]: ElementType;
}

export const typeComponentMap: ITypeComponentMap = {
    [IconType.Calendar]: CalendarIcon,
    [IconType.Clear]: ClearIcon,
    [IconType.Clock]: ClockIcon,
    [IconType.CodeCommit]: CodeCommitIcon,
    [IconType.Done]: DoneIcon,
    [IconType.Fail]: FailIcon,
    [IconType.Play]: PlayIcon,
    [IconType.Rebuild]: RebuildIcon,
    [IconType.Settings]: SettingsIcon,
    [IconType.Timer]: TimerIcon,
    [IconType.Tools]: ToolsIcon,
    [IconType.User]: UserIcon,
};
