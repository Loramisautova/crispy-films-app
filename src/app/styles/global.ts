import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createTheme';

export const globalStyles = (theme: Theme) => ({
    layoutSidePadding: {
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
    },
    pagePadding: theme.spacing(3, 0),
});

export const globalUseStyles = makeStyles((theme) =>
    createStyles({
        '@global': {
            a: {
                outline: 'none',
                textDecoration: 'none',
                '&:link, &:visited': {
                    color: theme.palette.primary.main,
                },
                '&:hover': {
                    color: theme.palette.secondary.main,
                },
            },
        },
    }),
);
