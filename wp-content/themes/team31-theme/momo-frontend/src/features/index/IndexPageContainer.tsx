/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/css';
import MJSquareImage from '../../components/MJSquareImage';

const IndexPageContainer: React.FC = () => {
    return (
        <>
            <div className={fullVisionCss}>
                <MJSquareImage src="https://ltag-local-development-bucket.s3.ap-southeast-2.amazonaws.com/448060286_341156948788413_907370303099670209_n.jpg" account_name="John Doe" />
                <MJSquareImage src="https://ltag-local-development-bucket.s3.ap-southeast-2.amazonaws.com/448060286_341156948788413_907370303099670209_n.jpg" account_name="John Doe" />
                <MJSquareImage src="https://ltag-local-development-bucket.s3.ap-southeast-2.amazonaws.com/448060286_341156948788413_907370303099670209_n.jpg" account_name="John Doe" />
                <MJSquareImage src="https://ltag-local-development-bucket.s3.ap-southeast-2.amazonaws.com/448060286_341156948788413_907370303099670209_n.jpg" account_name="John Doe" />
                <MJSquareImage src="https://ltag-local-development-bucket.s3.ap-southeast-2.amazonaws.com/448060286_341156948788413_907370303099670209_n.jpg" account_name="John Doe" />
                <MJSquareImage src="https://ltag-local-development-bucket.s3.ap-southeast-2.amazonaws.com/448060286_341156948788413_907370303099670209_n.jpg" account_name="John Doe" />
                <MJSquareImage src="https://ltag-local-development-bucket.s3.ap-southeast-2.amazonaws.com/448060286_341156948788413_907370303099670209_n.jpg" account_name="John Doe" />
                <MJSquareImage src="https://ltag-local-development-bucket.s3.ap-southeast-2.amazonaws.com/448060286_341156948788413_907370303099670209_n.jpg" account_name="John Doe" />
            </div>
        </>
    );
};

const fullVisionCss = css`
    width: 100%;
    margin: 0;
    padding: 0;
    height: auto; /* Full screen height */
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: 800px) {
        & > div {
            width: calc(25%); /* 4 items per row */
        }
    }
`;

export default IndexPageContainer;