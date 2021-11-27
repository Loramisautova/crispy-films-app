import { ICrew } from '../../features/models';

export type TGroupedCrew = Record<string, ICrew[]>;

/**
 * Group crew by department.
 */
export const groupByDepartment = (crew?: ICrew[]) =>
    crew?.reduce<TGroupedCrew>((acc, curr) => {
        const { department } = curr;

        if (!acc?.[department]) {
            acc[department] = [];
        }

        acc[department].push(curr);

        return acc;
    }, {});
