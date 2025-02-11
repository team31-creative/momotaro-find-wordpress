import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface MJTypographyProps extends TypographyProps {
    children: React.ReactNode;
}

const MJTypography: React.FC<MJTypographyProps> = ({ children, ...props }) => {
    return (
        <Typography {...props}>
            {children}
        </Typography>
    );
};

export default MJTypography;