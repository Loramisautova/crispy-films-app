import * as React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Backdrop, Box, Fade, Modal, Typography } from '@material-ui/core';

import { useStyles } from './styles';

interface IVideoPlayerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    videoKey: string;
    width?: number;
    height?: number;
    autoplay?: boolean;
}

export const VideoPlayer: React.FC<IVideoPlayerProps> = (props) => {
    const { isOpen, onClose, title, videoKey, width = 1024, height = 512, autoplay = true } = props;
    const classes = useStyles();
    let src = `https://www.youtube.com/embed/${videoKey}`;
    if (autoplay) {
        src = `${src}?autoplay=1`;
    }

    return (
        <div>
            {isOpen && (
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={isOpen}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={isOpen}>
                        <Box className={classes.wrapper}>
                            <Typography className={classes.header} id="transition-modal-title">
                                <Typography className={classes.title} variant="h6" component="h2">
                                    {title}
                                </Typography>
                                <CloseIcon className={classes.close} onClick={onClose} fontSize="small" />
                            </Typography>
                            <div className={classes.iframe}>
                                <iframe
                                    title={title}
                                    width={width.toString()}
                                    height={height.toString()}
                                    src={src}
                                    frameBorder="0"
                                />
                            </div>
                        </Box>
                    </Fade>
                </Modal>
            )}
        </div>
    );
};
