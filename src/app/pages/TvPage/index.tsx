import React from 'react';
import { useParams } from 'react-router-dom';
import { CastScroller } from '../../components/CastScroller';
import { PosterCard } from '../../components/PosterCard';

import { IIdRouteParam, ITVListItem } from '../../features/models';
import { useGetTvCreditsQuery, useGetTvQuery } from '../../features/tv/api';

export const TvPage: React.FC = () => {
    const { id: tvId } = useParams<IIdRouteParam>();
    const useGetTvState = useGetTvQuery(tvId);
    const useGetTvCreditsState = useGetTvCreditsQuery(tvId);
    const { name, posterPath, genres, episodeRunTime, tagline, overview, voteAverage, firstAirDate } =
        useGetTvState.data || ({} as ITVListItem);

    return (
        <div>
            {useGetTvState.data && (
                <PosterCard
                    name={name}
                    posterPath={posterPath}
                    genres={genres}
                    runtime={episodeRunTime}
                    tagline={tagline}
                    overview={overview}
                    voteAverage={voteAverage}
                    releaseDate={firstAirDate}
                    // creators={useGetTvState.data?.createdBy}
                />
            )}
            {useGetTvCreditsState.data && (
                <CastScroller
                    items={useGetTvCreditsState.data.cast}
                    viewMoreUrl={`/tv/${useGetTvCreditsState.data.id}/cast`}
                />
            )}
        </div>
    );
};
