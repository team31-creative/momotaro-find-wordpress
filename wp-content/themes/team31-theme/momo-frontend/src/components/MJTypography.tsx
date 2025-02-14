import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { css } from '@emotion/react';
interface MJTypographyProps extends TypographyProps {
    children: React.ReactNode;
    bold?: boolean;
    skelton?: boolean;
    className?: string;
}

const MJTypography: React.FC<MJTypographyProps> = ({ children, bold, skelton, className, ...props }) => {
    return (
        <Typography {...props} sx={MJTypographyCss(bold || false, skelton || false)} className={className}>
            {children}
        </Typography>
    );
};

const MJTypographyCss = (bold: boolean, skelton: boolean) => css`
    ${bold && `font-weight: bold;`}
    ${skelton ? `
        background: linear-gradient(90deg, #dfdfdf 25%, #eaeaea 50%, #dfdfdf 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
        width: 100%;
    ` : ''}
    
    @keyframes loading {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`;

export default MJTypography;