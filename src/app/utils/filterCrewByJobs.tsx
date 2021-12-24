import { ICrew, ICrewFilteredByJob } from '../features/models';

export const filterCrewByJobs = (crew: ICrew[] | undefined, jobTitles: string[]): ICrewFilteredByJob[] =>
    crew?.reduce<ICrewFilteredByJob[]>((result, curr) => {
        if (jobTitles.includes(curr.job)) {
            const person = result.find((p) => p.name === curr.name);
            if (person?.jobs.includes(curr.job)) {
                person?.jobs.push(curr.job);
            } else {
                result.push({
                    name: curr.name,
                    jobs: [curr.job],
                });
            }
        }

        return result;
    }, []) || [];
