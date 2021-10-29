import * as React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useStyles } from './styles';

interface IVideoPlayerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    videoKey: string;
    width?: number;
    height?: number;
}

export const VideoPlayer: React.FC<IVideoPlayerProps> = (props) => {
    const { isOpen, onClose, title, videoKey, width = 1024, height = 512 } = props;
    const classes = useStyles();

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
                            <Typography id="transition-modal-description" className={classes.iframe}>
                                <iframe
                                    title={title}
                                    width={width.toString()}
                                    height={height.toString()}
                                    src={`https://www.youtube.com/embed/${videoKey}`}
                                    frameBorder="0"
                                />
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            )}
        </div>
    );
};
