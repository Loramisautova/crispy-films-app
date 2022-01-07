import React, { useMemo } from 'react';
import { Box, Typography } from '@material-ui/core';

import { calcRuntime } from '../../utils/time';
import { IGenre } from '../../features/models';

import { ScoreProgress } from '../ScoreProgress';
import { CertificationChip } from '../CertificationChip';

import { useStyles } from './styles';

interface ICreatorItem {
    name: string;
    jobs: string[];
}

interface IPosterCardProps {
    posterPath?: string;
    name: string;
    genres: IGenre[];
    runtime?: number[];
    tagline?: string;
    overview: string;
    voteAverage: number;
    releaseDate: string;
    creators?: ICreatorItem[];
}

const certification = 'TV-14';

export const PosterCard: React.FC<IPosterCardProps> = (props) => {
    const { name, posterPath, genres, runtime, tagline, overview, voteAverage, releaseDate, creators } = props;
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
                        <Typography className={classes.certification}>
                            <CertificationChip certificationChip={certification} />
                        </Typography>
                        <Box className={classes.genres}>
                            {genres.map((genre, index, arr) => (
                                <Typography key={genre.id}>
                                    {genre.name}
                                    {index !== arr.length - 1 ? ',' : ''}&nbsp;
                                </Typography>
                            ))}
                        </Box>
                        {runtime && <Typography>&bull; {runtimeStr}</Typography>}
                    </Box>
                </div>
                <div className={classes.actions}>
                    <div className={classes.chart}>
                        <ScoreProgress voteAverage={voteAverage} />
                        <div className={classes.text}>
                            <Typography component="div" variant="subtitle2">
                                User <br />
                                Score
                            </Typography>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography className={classes.tagline} color="textSecondary" gutterBottom>
                        {tagline}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        Overview
                    </Typography>
                    <Typography className={classes.overview} gutterBottom component="div" variant="body2">
                        {overview}
                    </Typography>
                    <div className={classes.people}>
                        {creators?.map((creator) => (
                            <div className={classes.profile}>
                                <div className={classes.profileTitle}>{creator.name}</div>
                                <div className={classes.profileSubtitle}>{creator.jobs}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
