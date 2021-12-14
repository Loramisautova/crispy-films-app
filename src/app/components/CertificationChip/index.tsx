import React from 'react';

import { useStyles } from './styles';

interface ICertificationChipProps {
    certificationChip: string;
}

export const CertificationChip: React.FC<ICertificationChipProps> = (props) => {
    const { certificationChip } = props;
    const classes = useStyles();

    return <div className={classes.certification}>{certificationChip}</div>;
};
