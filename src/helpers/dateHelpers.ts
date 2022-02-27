import {format, parseISO} from 'date-fns';

export const formatDateToShortString = (dateStr: string) => format(parseISO(dateStr), 'EEE d MMM');
