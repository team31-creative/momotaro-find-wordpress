/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { cx } from '@emotion/css';
import MJTypography from '../../../components/MJTypography';
import MJNewsList from '../../../components/MJNewsList';

const NewCommer: React.FC = () => {
    const isMobile = window.innerWidth <= 800;
    return (
        <div css={newCommerCss}>
            <div>
                <MJTypography variant="h1" css={titleCss}>NEW<br />COMMER</MJTypography>
            </div>
            <div>
                <div css={newsListContainerCss}>
                        <ul css={ulCss}>
                            <li css={listCss}>
                                <MJNewsList title='参戦！' category='New Commer'  />
                            </li>
                            <li css={listCss}>
                                <MJNewsList title='参戦！' category='New Commer'  />
                            </li>
                            <li css={listCss}>
                                <MJNewsList title='参戦！' category='New Commer'  />
                            </li>
                            <li css={listCss}>
                                <MJNewsList title='参戦！' category='New Commer'  />
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

const listCss = css`
    max-width: 242px;
    min-width: 242px;

    @media (max-width: 600px) {
        min-width: 120px;
        > div {
            height: 210px;
        }
    }
`;

const newsListContainerCss = css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 800px) {
        &:nth-child(2) {
            margin-top: 30px;
        }
    }
`;

const ulCss = css`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    width: 550px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    margin: 0;

    @media (max-width: 600px) {
        width: 100%;

        li {
            margin: 0;
            width: 100%;
            flex: 0 0 calc(50% - 10px);
        }
    }
`;

const newsListCss = css`
    width: 600px;
    height: 500px;
`;

const titleCss = css`
    font-size: 128px;
    line-height: 1;
    font-weight: 700;
    margin-left: 40px;

    @media (max-width: 800px) {
        font-size: 40px;
        margin: 0 auto;
        margin-top: 210px;
        text-align: center;
    }
`;

const newCommerCss = css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        width: calc(100%/2);
    }

    @media (max-width: 800px) {
        flex-direction: column;
        > div {
            width: 100%;
        }
    }
`;

export default NewCommer;