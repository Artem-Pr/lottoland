import {format, parseISO} from 'date-fns';

const defaultFormat = 'EEE d MMM';

export const formatDateToShortString = (
    dateStr: string,
    formatStr?: string,
) => format(parseISO(dateStr), formatStr || defaultFormat);
