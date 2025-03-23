import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Icon from '@mdi/react';
import { css } from '@emotion/react';

interface MJButtonProps {
    onClick?: () => void;
    className?: string;
    icon?: string;
    imageUrl?: string;
    width?: number;
    border?: boolean;
    submit?: boolean;
    label?: string;
    isFat?: boolean;
    color?: "primary" | "secondary" | "text" | "list";
}

const MJButton: React.FC<MJButtonProps> = ({ onClick, className, submit, label, imageUrl, width, border, icon, color = "primary", isFat, ...props }) => {
    if (imageUrl && !width) {
        throw new Error('width is required when imageUrl is provided');
    }
    return (
        <ButtonBase 
            onClick={onClick} 
            sx={ButtonBaseCss(imageUrl, width, border, color,isFat)} 
            className={className}
            type={submit ? "submit" : "button"}
            {...props } 
        >
            {icon && <Icon path={icon} size={1} style={{ marginRight: label ? "5px" : "0" }}></Icon>}
            {label}
        </ButtonBase>
    );
};

const ButtonBaseCss = (imageUrl, width, border, color, isFat) => css`
    color: black;
    background-color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 7px 14px;
    border-radius: 10px;
    cursor: pointer;

    ${color === "primary" && css`
        background: linear-gradient(60deg, #000000 0%, #555 100%);
        color: white;
    `}

    ${(color === "text" || color === "list") && `
        background-color: transparent;
        color: black;
    `}

    ${border && `border: 1px solid;`}

    ${isFat && `
        padding: 12px 32px;
    `}

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