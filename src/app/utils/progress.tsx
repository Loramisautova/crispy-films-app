import * as Colors from '@material-ui/core/colors';

export const getColor = (num: number) => {
    let color;

    if (num >= 0 && num <= 39) {
        [color] = [Colors.red[500]];
    } else if (num >= 40 && num <= 69) {
        [color] = [Colors.yellow[500]];
    } else if (num >= 70 && num <= 100) {
        [color] = [Colors.green[500]];
    }

    return color;
};
