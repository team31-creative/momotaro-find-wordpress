import React from 'react';
import styled from 'styled-components';
import { css } from '@emotion/css';
import MJTypography from '../../../components/MJTypography';


const ProfileDescription: React.FC = () => {
    return (
        <DescriptionContainer>
            <MJTypography variant="h4" bold={true}>キャッチコピー</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>Template</MJTypography>
            <MJTypography variant="h4" bold={true}>ビジョン or 将来の方向性</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>Template</MJTypography>
            <MJTypography variant="h4" bold={true}>出身</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>Template</MJTypography>
            <MJTypography variant="h4" bold={true}>趣味・性格・経験した部活</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>Template</MJTypography>
            <MJTypography variant="h4" bold={true}>尊敬する人</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>Template</MJTypography>
            <MJTypography variant="h4" bold={true}>経歴</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>Template</MJTypography>
            <MJTypography variant="h4" bold={true}>やりたいこと<br />やりたくてやってきたこと</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>Template</MJTypography>
            <MJTypography variant="h4" bold={true}>状況</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>Template</MJTypography>
            <MJTypography variant="h4" bold={true}>現在の強み弱み</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>Template</MJTypography>
            <MJTypography variant="h4" bold={true}>求めている人</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>Template</MJTypography>
            <MJTypography variant="h4" bold={true}>お断りな人</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>Template</MJTypography>
        </DescriptionContainer>
    );
};

export default ProfileDescription;

const descriptionCss = css`
    padding: 10px 0;
`;

const DescriptionContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px 20px 3px 20px;
    border-radius: 15px;
    width: 80%;
    min-height: 40vh;
    height: auto;
    margin: 0 auto;
    margin-top: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
        margin-top: 15px;
        
        .MuiTypography-h4 {
            font-size: 1.4rem;
        }
    }
`;
