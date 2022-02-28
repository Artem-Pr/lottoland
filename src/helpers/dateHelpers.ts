import {
    format,
    isValid,
    parse,
    parseISO,
} from 'date-fns';

export const INVALID_DATE = 'INVALID_DATE';
export const INCOMING_FORMAT_DEFAULT = 'dd.MM.yyyy, HH:mm';
const DEFAULT_DATE_FORMAT = 'EEE d MMM';

export const formatDate = (
    dateStr: string | Date,
    formatStr?: string,
): string => {
    const preparedDate = 'string' === typeof dateStr ? parseISO(dateStr) : dateStr;
    return isValid(new Date(dateStr))
        ? format(preparedDate, formatStr || DEFAULT_DATE_FORMAT)
        : INVALID_DATE;
};

export const parseDateIntoValidFormat = (
    dateStr: string,
    inputFormat?: string,
) => {
    const parsedFormat = parse(dateStr, inputFormat || INCOMING_FORMAT_DEFAULT, new Date());
    return isValid(parsedFormat)
        ? parsedFormat
        : INVALID_DATE;
};
