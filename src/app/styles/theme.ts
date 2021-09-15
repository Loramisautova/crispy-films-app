import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: Colors.grey['900'],
        },
        secondary: {
            main: Colors.deepOrange['400'],
        },
    },
});