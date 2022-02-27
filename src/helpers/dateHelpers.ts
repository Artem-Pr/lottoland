import {
    format,
    isValid,
    parseISO,
} from 'date-fns';

export const INVALID_DATE = 'INVALID_DATE';
const DEFAULT_DATE_FORMAT = 'EEE d MMM';

export const formatDateToShortString = (
    dateStr: string,
    formatStr?: string,
): string => (
    isValid(new Date(dateStr))
        ? format(parseISO(dateStr), formatStr || DEFAULT_DATE_FORMAT)
        : INVALID_DATE
);
