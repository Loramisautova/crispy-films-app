import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetTvQuery } from '../../features/tv/api';
import { IIdRouteParam } from '../../features/models';

export const TvPage: React.FC = () => {
    const { id: tvId } = useParams<IIdRouteParam>();
    const useGetTvState = useGetTvQuery(tvId);

    return <div>TV Page : {useGetTvState.data?.name}</div>;
};
