import React from 'react';
import { useParams } from 'react-router-dom';
import { PosterCard } from '../../components/PosterCard';

import { IIdRouteParam } from '../../features/models';
import { useGetTvQuery } from '../../features/tv/api';

export const TvPage: React.FC = () => {
    const { id: tvId } = useParams<IIdRouteParam>();
    const useGetTvState = useGetTvQuery(tvId);

    console.log(useGetTvState.data?.createdBy);

    return (
        <div>
            {useGetTvState.data && (
                <PosterCard
                    name={useGetTvState.data?.name}
                    posterPath={useGetTvState.data?.posterPath}
                    genres={useGetTvState.data?.genres}
                    runtime={useGetTvState.data?.episodeRunTime}
                    tagline={useGetTvState.data?.tagline}
                    overview={useGetTvState.data?.overview}
                    voteAverage={useGetTvState.data?.voteAverage}
                    releaseDate={useGetTvState.data?.firstAirDate}
                    // creators={useGetTvState.data?.createdBy}
                />
            )}
        </div>
    );
};
