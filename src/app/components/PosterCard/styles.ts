import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: theme.spacing(3, 0),
    },
    poster: {
        width: '300px',
        height: '450px',
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: theme.spacing(5),
        alignItems: 'flex-start',
        alignContent: 'center',
        boxSizing: 'border-box',
    },
    title: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(3),
    },
    name: {
        display: 'flex',
        width: '100%',
        margin: '0px',
        padding: '0px',
        fontWeight: 'bold',
    },
    date: {
        marginLeft: theme.spacing(1),
    },
    facts: {
        display: 'flex',
        width: '100%',
    },
    certification: {
        marginRight: theme.spacing(1),
    },
    genres: {
        display: 'flex',
        marginLeft: theme.spacing(1),
    },
    runtime: {
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
