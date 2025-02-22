/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface MJSquareImageProps {
    src: string;
    alt?: string;
}

const MJSquareImage: React.FC<MJSquareImageProps> = ({ src, alt = '' }) => {
    return (
        <div css={containerCss}>
            <img src={src} alt={alt} css={imageCss} />
        </div>
    );
};

const containerCss = css`
    max-width: 400px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const imageCss = css`
    width: 100%;
    height: 100%;
`;

export default MJSquareImage;