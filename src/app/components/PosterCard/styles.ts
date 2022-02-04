import { makeStyles } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    poster: {
        width: '300px',
        height: '450px',
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: theme.spacing(5),
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        boxSizing: 'border-box',
    },
    title: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(3),
    },
    name: {
        display: 'flex',
        '& > h1': {
            marginTop: 0,
            marginBottom: 0,
        },
        width: '100%',
    },
    date: {
        marginLeft: theme.spacing(1),
        fontWeight: theme.typography.fontWeightLight,
        color: Colors.grey[600],
    },
    facts: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    certification: {
        marginRight: theme.spacing(1),
        color: Colors.grey[800],
    },
    genres: {
        display: 'flex',
        marginLeft: theme.spacing(1),
    },
    actions: {
        marginBottom: theme.spacing(3),
    },
    chart: {
        display: 'flex',
    },
    text: {
        marginLeft: theme.spacing(1),
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    tagline: {
        marginBottom: theme.spacing(1),
    },
    overview: {
        marginTop: theme.spacing(1),
    },
    people: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexWrap: 'wrap',
    },
    profile: {
        minWidth: 140,
        justifyContent: 'flex-start',
        padding: theme.spacing(0, 5, 2, 0),
    },
    profileTitle: {
        fontWeight: theme.typography.fontWeightBold,
    },
    profileSubtitle: {},
}));
