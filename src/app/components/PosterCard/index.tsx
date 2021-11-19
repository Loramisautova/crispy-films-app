import React, { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ScoreProgress } from '../ScoreProgress';
import { calcRuntime } from '../../utils/time';
import { IGenre, ICreator } from '../../features/models';

import { useStyles } from './styles';

interface IPosterCardProps {
    posterPath?: string;
    name: string;
    genres: IGenre[];
    runtime?: number[];
    tagline?: string;
    overview: string;
    voteAverage: number;
    releaseDate: string;
    // creators: ICreator[];
}

export const PosterCard: React.FC<IPosterCardProps> = (props) => {
    const { name, posterPath, genres, runtime, tagline, overview, voteAverage, releaseDate } = props;
    const classes = useStyles();

    const date = releaseDate.substring(0, 4);
    const runtimeStr = useMemo(() => (runtime && runtime?.length > 0 ? calcRuntime(runtime) : undefined), [runtime]);

    return (
        <div className={classes.root}>
            <div className={classes.poster}>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_face${posterPath}`} alt={name} />
            </div>
            <div className={classes.content}>
                <div className={classes.title}>
                    <Box className={classes.name}>
                        <h1>{name}</h1>
                        <h1 className={classes.date}>({date})</h1>
                    </Box>
                    <Box className={classes.facts}>
                        <Typography className={classes.certification}>TV-MA</Typography>
                        <Box className={classes.genres}>
                            {genres.map((genre, index, arr) => (
                                <Typography key={genre.id}>
                                    {genre.name}
                                    {index !== arr.length - 1 ? ',' : ''}&nbsp;
                                </Typography>
                            ))}
                        </Box>
                        {runtime && <Typography className={classes.runtime}>{runtimeStr}</Typography>}
                    </Box>
                </div>
                <div className={classes.actions}>
                    <div className={classes.chart}>
                        <div className={classes.details}>
                            <ScoreProgress voteAverage={voteAverage} />
                        </div>
                        <div className={classes.text}>
                            <Typography>User</Typography>
                            <Typography>Score</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.info}>
                    <Typography color="text.secondary" gutterBottom>
                        {tagline}
                    </Typography>
                    <Typography className={classes.tagline} variant="h6" gutterBottom component="div">
                        Overview
                    </Typography>
                    <Typography className={classes.overview} gutterBottom component="div">
                        {overview}
                    </Typography>
                    <div className={classes.people}>
                        <div className={classes.profile}>Profile</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
