export enum IFormField {
    Repository = 'repository',
    Command = 'command',
    Branch = 'branch',
    Time = 'time',
}

export type FormData = Record<IFormField, string>;
