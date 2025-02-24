/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MJTypography from './MJTypography';
import NO_IMAGE from '../assets/no_image.jpg';
import React from 'react';

interface MJSquareImageProps {
    src: string;
    alt?: string;
    account_name: string;
    onClick?: () => void;
}

const MJSquareImage: React.FC<MJSquareImageProps> = ({ src, alt = '', account_name, onClick }) => {
    return (
        <>
            <div css={containerCss} onClick={() => onClick}>
                <img 
                    src={src} 
                    alt={alt} 
                    css={imageCss} 
                    onError={(e) => (e.currentTarget.src = NO_IMAGE)} 
                />
                <div css={overlayCss}>
                    <MJTypography variant="h4">{account_name}</MJTypography>
                </div>
            </div>
        </>
    );
};

const overlayCss = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    > .MuiTypography-root {
        color: white;
    }
    &:hover {
        opacity: 1;
    }
`;

const containerCss = css`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover {
        cursor: pointer;
        > img {
            transform: scale(1.1);
        }
    }
`;

const imageCss = css`
    width: 100%;
    height: 100%;
    transition: 0.5s;
    position: relative;
`;

export default MJSquareImage;