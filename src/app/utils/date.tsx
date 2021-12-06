import { format } from 'date-fns';

export const getFormattedDate = (dateStr: string) => {
    const formattedDate = format(new Date(dateStr), 'dd MMM, yyyy');

    return formattedDate;
};
