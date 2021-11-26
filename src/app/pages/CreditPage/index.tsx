import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CreditCard } from '../../components/CreditCard';
import { EMediaType } from '../../enums';
import { IIdRouteParam, IMovieCreditList } from '../../features/models';
import { useGetCreditsQuery } from '../../features/movies/api';

import { groupByDepartment, TGroupedCrew } from './utils';
import { useStyles } from './styles';

interface IProps {
    type: EMediaType;
}

export const CreditPage: React.FC<IProps> = (props) => {
    const { type } = props;
    const classes = useStyles();
    const { id: movieId } = useParams<IIdRouteParam>();
    const [groupedCrew, setGroupedCrew] = useState<TGroupedCrew>({});
    const useGetCreditsState = useGetCreditsQuery(movieId);
    const { cast, crew } = useGetCreditsState.data || ({} as IMovieCreditList);

    console.log('##############');
    console.log('type', type);
    console.log('##############');
    console.log(useGetCreditsState.data?.crew);

    useEffect(() => {
        if (type === EMediaType.MOVIE) {
            setGroupedCrew(groupByDepartment(useGetCreditsState.data?.crew) || {});
        } else {
            // TV.
        }
    }, [type, useGetCreditsState.data?.crew]);

    console.log('##############');
    console.log('groupedCrew', groupedCrew);
    console.log('object', Object.keys(groupedCrew));
    console.log('##############');

    return (
        <div>
            <div className={classes.columnWrapper}>
                <div className={classes.contentWrapper}>
                    <section className={classes.panel}>
                        <div className={classes.title}>
                            <h3>
                                Cast
                                <span className={classes.castNum}>{cast?.length}</span>
                            </h3>
                        </div>
                        <div>
                            {useGetCreditsState.data &&
                                cast?.map((actor) => (
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
                                <span className={classes.castNum}>{crew?.length}</span>
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
            </div>
        </div>
    );
};
