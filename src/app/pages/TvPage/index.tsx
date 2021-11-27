import React from 'react';
import { useParams } from 'react-router-dom';
import { CastScroller } from '../../components/CastScroller';
import { PosterCard } from '../../components/PosterCard';

import { IIdRouteParam, ITVListItem } from '../../features/models';
import { useGetCreditsQuery, useGetTvQuery } from '../../features/tv/api';

export const TvPage: React.FC = () => {
    const { id: tvId } = useParams<IIdRouteParam>();
    const useGetTvState = useGetTvQuery(tvId);
    const useGetCreditsState = useGetCreditsQuery(tvId);
    const { name, posterPath, genres, episodeRunTime, tagline, overview, voteAverage, firstAirDate } =
        useGetTvState.data || ({} as ITVListItem);

    console.log('##############');
    console.log('TV Credits', useGetCreditsState.data?.crew);
    console.log('##############');

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
            {useGetCreditsState.data && (
                <CastScroller
                    items={useGetCreditsState.data.cast}
                    viewMoreUrl={`/tv/${useGetCreditsState.data.id}/cast`}
                />
            )}
        </div>
    );
};
