import React from 'react';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
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
    // creators: ICreator[];
}

export const PosterCard: React.FC<IPosterCardProps> = (props) => {
    const { name, posterPath, genres, runtime, tagline, overview, voteAverage } = props;
    const classes = useStyles();

    const calcRuntime = (arr: number[]) => {
        const runtimeNum = arr[0];
        const hour = Math.floor(runtimeNum / 60);
        const minutes = runtimeNum % 60;

        if (runtimeNum === 60) {
            return `${hour}h`;
        }
        return runtimeNum >= 60 ? `${hour}h ${minutes}m` : `${runtimeNum}m`;
    };

    return (
        <div className={classes.root}>
            <div className={classes.poster}>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_face${posterPath}`} alt={name} />
            </div>
            <div className={classes.content}>
                <div className={classes.title}>
                    <Box sx={{ fontWeight: 'bold' }} className={classes.name}>
                        <h1>{name}</h1>
                        <h1 className={classes.date}>(2021)</h1>
                    </Box>
                    <Box className={classes.facts}>
                        <Typography className={classes.certification}>TV-MA</Typography>
                        <Box className={classes.genres} ml="8px">
                            {genres.map((genre, index, arr) => (
                                <Typography key={genre.id}>
                                    {genre.name}
                                    {index !== arr.length - 1 ? ',' : ''}&nbsp;
                                </Typography>
                            ))}
                        </Box>
                        {runtime && (
                            <Typography className={classes.runtime} ml="8px">
                                {calcRuntime(runtime)}
                            </Typography>
                        )}
                    </Box>
                </div>
                <div className={classes.actions}>
                    <div className={classes.chart}>
                        <div className={classes.details}>
                            <div className={classes.score}>
                                <Typography className={classes.percent}>{`${voteAverage * 10}%`}</Typography>
                                <CircularProgress
                                    className={classes.icon}
                                    variant="determinate"
                                    value={voteAverage * 10}
                                    size="100%"
                                />
                            </div>
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
