export interface IBuild {
    id: number;
    name: string;
    status: BuildStatus;
    branch: string;
    hash: string;
    author: {
        id: number;
        name: string;
    };
    tsStart: number;
    tsEnd: number;
}

export enum BuildStatus {
    Done = 'done',
    Fail = 'fail',
    Pending = 'pending',
}
