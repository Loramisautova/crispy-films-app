import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: theme.spacing(3),
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
    details: {
        position: 'relative',
        borderRadius: '50%',
        backgroundColor: 'hsl(194deg 62% 8%)',
        width: '68px',
        height: '68px',
    },
    circle: {
        color: 'hsl(120deg 100% 25%)',
    },
    text: {
        marginLeft: theme.spacing(1),
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    info: {},
    tagline: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    overview: {},
    people: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    profile: {
        width: '33%',
    },
}));
