import React from 'react';
import styled from 'styled-components';
import { css } from '@emotion/css';
import MJTypography from '../../../components/MJTypography';

interface ProfileDescriptionProps {
    slug: string;
    catchCopy?: string;
    vision?: string;
    yourComefrom?: string;
    yourHumanity?: string;
    respectPeople?: string;
    career?: string;
    playVision?: string;
    situation?: string;
    yourStrongPoint?: string;
    seekPeople?: string;
    refusePeople?: string;
}


const ProfileDescription: React.FC<ProfileDescriptionProps> = (
    {
        slug,
        catchCopy,
        vision,
        yourComefrom,
        yourHumanity,
        respectPeople,
        career,
        playVision,
        situation,
        yourStrongPoint,
        seekPeople,
        refusePeople
    }
) => {
    return (
        <DescriptionContainer>
            {slug === 'momotaro' && (
                <>
                    <MJTypography variant="h5" bold={true}>キャッチコピー</MJTypography>
                    <MJTypography variant="body1" className={descriptionCss}>{catchCopy}</MJTypography>
                </>
            )}
            {slug === 'momotaro' && (
                <>
                    <MJTypography variant="h5" bold={true}>ビジョン or 将来の方向性</MJTypography>
                    <MJTypography variant="body1" className={descriptionCss}>{vision}</MJTypography>
                </>
            )}
            <MJTypography variant="h5" bold={true}>出身</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>{yourComefrom}</MJTypography>
            <MJTypography variant="h5" bold={true}>趣味・性格・経験した部活</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>{yourHumanity}</MJTypography>
            <MJTypography variant="h5" bold={true}>尊敬する人</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>{respectPeople}</MJTypography>
            <MJTypography variant="h5" bold={true}>経歴</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>{career}</MJTypography>
            <MJTypography variant="h5" bold={true}>やりたいこと<br />やりたくてやってきたこと</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>{playVision}</MJTypography>
            <MJTypography variant="h5" bold={true}>状況</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>{situation}</MJTypography>
            <MJTypography variant="h5" bold={true}>現在の強み弱み</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>{yourStrongPoint}</MJTypography>
            <MJTypography variant="h5" bold={true}>求めている人</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>{seekPeople}</MJTypography>
            <MJTypography variant="h5" bold={true}>お断りな人</MJTypography>
            <MJTypography variant="body1" className={descriptionCss}>{refusePeople}</MJTypography>
        </DescriptionContainer>
    );
};

export default ProfileDescription;

const descriptionCss = css`
    padding: 10px 0;
`;

const DescriptionContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px 20px 40px 20px;
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
        
        .MuiTypography-h5 {
            font-size: 1.4rem;
        }
    }
`;
