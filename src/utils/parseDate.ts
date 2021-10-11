import moment from 'moment';

export const getDate = (ts: number) => {
    return moment(ts).format('DD MMM, HH:MM');
};

export const getTime = (ts: number) => {
    return moment(ts).format('H:MM');
};
