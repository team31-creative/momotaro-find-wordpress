/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from 'styled-components';
import MJAvatar from '../../../components/MJAvatar';
import MJTypography from '../../../components/MJTypography';
import { useMediaQuery } from 'react-responsive';

const coverImageStyle = css`
    width: 100%;
    height: 420px;
    background-color: black;
    border-radius: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1200px) {
        width: 96%;
        height: 35vw;
    }
`;

interface CoverProfileProps {
    name: string;
}

const CoverProfile: React.FC<CoverProfileProps> = ({ name }) => {
    const isMobile = useMediaQuery({ maxWidth: 600 });
    return (
        <>
            <div css={coverImageStyle}></div>
            <TitleContainer>
                <MJAvatar size="L" />
                {isMobile ? (
                    <TitleTextMbl variant="h5" bold={true} skelton={false}>
                        {name}
                    </TitleTextMbl>
                ) : (
                    <TitleText variant="h4" bold={true} skelton={false}>
                        {name}
                    </TitleText>
                )}
            </TitleContainer>
        </>
    );
};

const TitleContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 14px 20px 15px 20px;
    border-radius: 15px;
    width: 80%;
    height: 110px;
    margin: 0 auto;
    margin-top: -60px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: left;
    align-items: center;

    @media (max-width: 1200px) {
        width: 80%;
        height: 10vw;
        max-height: 84px;
        margin-top: -40px;

        .MuiAvatar-root {
            min-height: 35px;
            min-width: 35px;
            width: 3.5rem;
            height: 3.5rem;
        }

        @media (max-width: 500px) {
            margin-top: -20px;

            .MuiAvatar-root {
                min-height: 15px;
                min-width: 15px;
                margin-top: 3px;
                width: 3rem;
                height: 3rem;
            }
        }
    }
`;

const TitleText = styled(MJTypography)`
    height: 33px;
    padding-bottom: 5px;
    padding-left: 14px;
    margin: 20px 0 0 0;
    color: #000000;
`;

const TitleTextMbl = styled(MJTypography)`
    height: 33px;
    padding-top: 5px;
    padding-left: 14px;
    color: #000000;
`;

export default CoverProfile;