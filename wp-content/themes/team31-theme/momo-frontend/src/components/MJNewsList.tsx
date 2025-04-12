/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import MJTypography from './MJTypography';

interface MJNewsListProps {
    imgUrl?: string;
    date?: Date;
    title: string;
    category?: string;
    skelton?: boolean;
    onClick?: () => void;
}

const MJNewsList: React.FC<MJNewsListProps> = ({imgUrl, date, title, category, skelton, onClick}) => {
    return (
        <div css={MJNewsListCss} onClick={onClick}>
            <div css={overFlowBlockCss(skelton)}>
                <img css={MJNewsListImageCss} src={imgUrl ?? 'https://placehold.jp/287x155.png'} alt={title} />
            </div>
            <MJTypography skelton={skelton} variant="body2" style={{padding: "6px 10px"}}>{date && !skelton ? `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}` : ''} {category}</MJTypography>
            <MJTypography skelton={skelton} variant="h6" style={{padding: "0 10px", lineHeight: "1.3", "verticalAlign": "top"}}>{title}</MJTypography>
        </div>
    );
};

const MJNewsListCss = css`
        overflow: hidden;
        max-width: 100%;
        width: 100%;
        height: 274px;
        background-color: rgba(255, 255, 255, 0.7);
        color: #000000;
        box-sizing: border-box;
        &:hover {
                text-decoration: underline
                cursor: pointer;
        }
`;

const overFlowBlockCss = (skelton) => css`
    overflow: hidden;
    height: auto;
    max-height: 155px;
    ${skelton ? `
        background: linear-gradient(90deg, #dfdfdf 25%, #eaeaea 50%, #dfdfdf 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
        min-height: 50px;
        height: 50%;
        max-height: 155px;
        > img {display: none;}
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

const MJNewsListImageCss = css`
    width: 100%;
    max-width: 287px;
    max-height: 155px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export default MJNewsList;