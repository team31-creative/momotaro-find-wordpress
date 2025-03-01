import React from 'react';
import styled from 'styled-components';
import { css } from '@emotion/css';
import MJTypography from '../../../components/MJTypography';
import MJIcon from '../../../components/MJIcon';
import { mdiClock } from '@mdi/js';

interface NewsDescriptionProps {
    title: string;
}


const NewsDescription: React.FC<NewsDescriptionProps> = ({ description }) => {
    return (
        <DescriptionContainer>
            <div dangerouslySetInnerHTML={{ __html: description }} />
        </DescriptionContainer>
    );
};

const DescriptionContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    margin-top: 10px;
    padding: 10px 20px 3px 20px;
    border-radius: 15px;
    width: 100%;
    min-height: 40vh;
    height: auto;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 89%;
        margin: 0 auto;
        margin-top: 15px;
    }
`;

export default NewsDescription;