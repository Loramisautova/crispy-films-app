import { makeStyles } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';
import { globalStyles } from '../../styles/global';

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: Colors.blueGrey['900'],
        '& $a': {
            '&:link, &:visited': {
                color: theme.palette.primary.contrastText,
                cursor: 'pointer',
            },
            '&:hover': {
                '& $image': {
                    opacity: 0.8,
                },
                color: theme.palette.secondary.main,
            },
        },
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        padding: theme.spacing(2, 2),
        ...globalStyles(theme).layoutSidePadding,
    },
    image: {
        display: 'flex',
        cursor: 'pointer',
    },
    title: {
        display: 'flex',
        cursor: 'pointer',
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: theme.spacing(3),
    },
    link: {
        width: '100%',
    },
}));
