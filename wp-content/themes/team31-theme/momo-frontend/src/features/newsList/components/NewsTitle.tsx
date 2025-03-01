import React from 'react';
import styled from 'styled-components';
import { css } from '@emotion/css';
import MJTypography from '../../../components/MJTypography';
import MJIcon from '../../../components/MJIcon';
import { mdiClock } from '@mdi/js';

interface NewsTitleProps {
    title: string;
    date: Date;
    isLoading?: boolean;
}

const NewsTitle: React.FC<NewsTitleProps> = ({ title,date, isLoading }) => {
    return (
        <TitleContainer>
            <TitleText variant="h4" bold={true} skelton={isLoading}>{title}</TitleText>
            <MJTypography variant="body1" className={DateDisplayCss}><MJIcon icon={mdiClock} color={'#000'} />{!isLoading && (date !== undefined ? date.split('T')[0].replace(/-/g, '/') + 'に投稿・TAG_NAME' : '1970/01/01に投稿・TAG_NAME')}</MJTypography>
        </TitleContainer>
    );
};

const DateDisplayCss = css`
    color: #9b9b9b;
    margin-top: 20px;
    padding-bottom: 8px;
`;

const TitleContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 14px 20px 3px 20px;
    border-radius: 15px;
    width: 100%;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 89%;
        margin: 0 auto;
        margin-top: 15px;
    }
`;

const TitleText = styled(MJTypography)`
    padding-top: 3px;
    padding-bottom: 8px;
    height: 33px;
    color: #000000;
`;

export default NewsTitle;