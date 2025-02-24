/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { cx } from '@emotion/css';
import MJTypography from '../../../components/MJTypography';
import MJNewsList from '../../../components/MJNewsList';

const NewCommer: React.FC = () => {
    return (
        <div css={newCommerCss}>
            <div>
                <MJTypography variant="h1" css={titleCss}>NEW<br></br>COMMER</MJTypography>
            </div>
            <div>
                <div css={newsListContainerCss}>
                        <ul css={ulCss}>
                            <li style={{ maxWidth: "242px", minWidth: "242px" }}>
                                <MJNewsList title='参戦！' category='New Commer'  />
                            </li>
                            <li style={{ maxWidth: "242px", minWidth: "242px" }}>
                                <MJNewsList title='参戦！' category='New Commer'  />
                            </li>
                            <li style={{ maxWidth: "242px", minWidth: "242px" }}>
                                <MJNewsList title='参戦！' category='New Commer'  />
                            </li>
                            <li style={{ maxWidth: "242px", minWidth: "242px" }}>
                                <MJNewsList title='参戦！' category='New Commer'  />
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

const newsListContainerCss = css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const ulCss = css`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    width: 550px;
    flex-wrap: wrap;
    gap: 10px;
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
`;

export default NewCommer;