import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CreditCard } from '../../components/CreditCard';
import { EMediaType } from '../../enums';
import { ICast, IIdRouteParam } from '../../features/models';
import { useGetMovieCreditsQuery } from '../../features/movies/api';
import { useGetTvCreditsQuery } from '../../features/tv/api';

import { groupByDepartment, TGroupedCrew } from './utils';
import { useStyles } from './styles';

interface IProps {
    type: EMediaType;
}

export const CreditPage: React.FC<IProps> = (props) => {
    const { type } = props;
    const classes = useStyles();
    const [groupedCrew, setGroupedCrew] = useState<TGroupedCrew>({});
    const [groupedCast, setGroupedCast] = useState<ICast[]>();

    const { id: movieId } = useParams<IIdRouteParam>();
    const { id: tvId } = useParams<IIdRouteParam>();

    const useGetMovieCreditsState = useGetMovieCreditsQuery(movieId);
    const useGetTvCreditsState = useGetTvCreditsQuery(tvId);

    useEffect(() => {
        if (type === EMediaType.MOVIE) {
            setGroupedCrew(groupByDepartment(useGetMovieCreditsState.data?.crew) || {});
            setGroupedCast(useGetMovieCreditsState.data?.cast);
        } else {
            setGroupedCrew(groupByDepartment(useGetTvCreditsState.data?.crew) || {});
            setGroupedCast(useGetTvCreditsState.data?.cast);
        }
    }, [
        type,
        useGetMovieCreditsState.data?.crew,
        useGetTvCreditsState.data?.crew,
        useGetMovieCreditsState.data?.cast,
        useGetTvCreditsState.data?.cast,
    ]);

    const flattenedCrew = Object.values(groupedCrew).reduce(
        (previousValue, currentValue) => previousValue.concat(currentValue),
        [],
    );

    return (
        <div className={classes.contentWrapper}>
            <section className={classes.panel}>
                <div className={classes.title}>
                    <h3>
                        Cast
                        <span className={classes.castNum}>{groupedCast?.length}</span>
                    </h3>
                </div>
                <div>
                    {groupedCast?.map((actor) => (
                        <CreditCard
                            key={`${actor.id}_${actor.character}`}
                            profilePath={actor.profilePath}
                            title={actor.name}
                            subTitle={actor.character}
                        />
                    ))}
                </div>
            </section>
            <section className={classes.panel}>
                <div className={classes.title}>
                    <h3>
                        Crew
                        <span className={classes.castNum}>{flattenedCrew?.length}</span>
                    </h3>
                </div>
                {Object.keys(groupedCrew)
                    .sort()
                    .map((department, idx) => (
                        <React.Fragment key={department}>
                            <h4 className={idx === 0 ? classes.departmentFirst : classes.departmentTitle}>
                                {department}
                            </h4>
                            {groupedCrew[department].map((person) => (
                                <CreditCard
                                    key={`${person.id}_${person.job}`}
                                    profilePath={person.profilePath}
                                    title={person.name}
                                    subTitle={person.job}
                                />
                            ))}
                        </React.Fragment>
                    ))}
            </section>
        </div>
    );
};
