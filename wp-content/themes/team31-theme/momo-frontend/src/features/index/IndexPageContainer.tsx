/** @jsxImportSource @emotion/react */
import React from 'react';
import MJTypography from '../../components/MJTypography';
import { css } from '@emotion/css';

const IndexPageContainer: React.FC = () => {
    return (
        <>
            <div className={fullVisionCss}>
                
            </div>
        </>
    );
};

const fullVisionCss = css`
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default IndexPageContainer;