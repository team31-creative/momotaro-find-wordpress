import React from 'react';
import styled from 'styled-components';

const ProfileMovie: React.FC = () => {
    return (
        <PMContainer>
            <video 
            controls 
            style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '10px', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' 
            }}
            >
            <source src="https://momotaro-find.s3.ap-southeast-2.amazonaws.com/%E4%B8%AD%E8%B0%B7%E5%A4%A7%E5%B8%8C.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </PMContainer>
    );
};

const PMContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    width: 83%;
    min-height: 20vh;
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

export default ProfileMovie;