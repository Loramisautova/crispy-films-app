import { format } from 'date-fns';

/** Formatted Date. */
export const getFormattedDate = (dateStr: string) => {
    const formattedDate = format(new Date(dateStr), 'dd MMM, yyyy');

    return formattedDate;
};
