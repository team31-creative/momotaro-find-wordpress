/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import MJTypography from './MJTypography';
import MJAvatar from './MJAvatar';

interface MJNewsListProps {
    imgUrl?: string;
    iconUrl?: string;
    date?: Date;
    title: string;
    userName: string;
    skelton?: boolean;
}

const MJBlogList: React.FC<MJNewsListProps> = ({imgUrl, iconUrl, date, title, userName, skelton}) => {
    return (
        <div css={MJBlogListCss}>
            <div css={overFlowBlockCss(skelton)}>
                <img css={MJBlogListImageCss} src={imgUrl ?? 'https://placehold.jp/287x155.png'} alt={title} />
            </div>
            <MJTypography skelton={skelton} style={{padding: "1px 10px"}}>{title}</MJTypography>
            <div style={{padding: "5px 10px", display: "flex", alignItems: "center"}}>
                <MJAvatar skelton={skelton} size='S' src={iconUrl} />
                <MJTypography skelton={skelton} style={{marginLeft: "12px", fontSize: "13px"}}>{userName}</MJTypography>
            </div>
            <MJTypography style={{padding: "5px 10px", lineHeight: "1.3", fontSize: "10px"}}>{date && !skelton ? `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}` : ''} ❤️4</MJTypography>
        </div>
    );
};

export default MJBlogList;

const MJBlogListCss = css`
        overflow: hidden;
        max-width: 100%;
        width: 100%;
        height: 280px;
        background-color: #ffffff;
        box-sizing: border-box;
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

const MJBlogListImageCss = css`
    width: 100%;
    max-width: 287px;
    max-height: 155px;
    &:hover {
        cursor: pointer;
    }
`;