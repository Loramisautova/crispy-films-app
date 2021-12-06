import { Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import classnames from 'classnames';
import React from 'react';

import { getFormattedDate } from '../../utils/date';
import { IClassName } from '../../models';

import { VideoPlayer } from '../VideoPlayer';

import { useStyles } from './styles';

export interface IVideoCardProps extends IClassName {
    id: string;
    videoKey: string;
    title: string;
    date: string;
}

export const VideoCard: React.FC<IVideoCardProps> = (props) => {
    const { className, title, date, videoKey } = props;
    const [isOpen, setIsOpen] = React.useState(false);
    const classes = useStyles();

    const handleClose = () => {
        setIsOpen(false);
    };

    const dateStr = date.substring(0, 10);

    return (
        <div className={classnames(classes.root, className)}>
            <div className={classes.video}>
                <div className={classes.wrapper} onClick={() => setIsOpen(true)}>
                    <div className={classes.image}>
                        {videoKey && <img src={`https://img.youtube.com/vi/${videoKey}/hqdefault.jpg`} alt={title} />}
                    </div>
                    <div className={classes.play}>
                        <PlayArrowIcon className={classes.icon} />
                    </div>
                </div>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="body1">
                        {title}
                    </Typography>
                    <Typography className={classes.subTitle} variant="body2">
                        {getFormattedDate(dateStr)}
                    </Typography>
                </div>
                <VideoPlayer isOpen={isOpen} onClose={handleClose} title={title} videoKey={videoKey} />
            </div>
        </div>
    );
};
