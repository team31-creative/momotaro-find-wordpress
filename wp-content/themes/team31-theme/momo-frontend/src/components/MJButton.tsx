import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import { css } from '@emotion/react';

interface MJButtonProps {
    onClick?: () => void;
    className?: string;
    imageUrl?: string;
    width?: number;
    border?: boolean;
    label?: string;
    color?: "primary" | "secondary" | "text" | "list";
}

const MJButton: React.FC<MJButtonProps> = ({ onClick, className, label, imageUrl, width, border, color = "primary", ...props }) => {
    if (imageUrl && !width) {
        throw new Error('width is required when imageUrl is provided');
    }
    return (
        <ButtonBase 
            onClick={onClick} 
            sx={ButtonBaseCss(imageUrl, width, border, color)} 
            className={className}
            {...props } 
        >
            {label}
        </ButtonBase>
    );
};

const ButtonBaseCss = (imageUrl, width, border, color) => css`
    color: black;
    background-color: white;
    font-size: 16px;
    padding: 7px 14px;

    ${color === "primary" && `
        background-color: black;
        color: white;
    `}

    ${(color === "text" || color === "list") && `
        color: black;
    `}

    ${border && `border: 1px solid;`}

    ${imageUrl && `
        background-image: url(${imageUrl});
        width: ${width}px;
        height: calc(${width}px / 2);
        background-size: cover;
        background-position: center;
        padding: 0;
    `}
`;

export default MJButton;