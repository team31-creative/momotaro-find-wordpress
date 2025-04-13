/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from 'styled-components';
import MJAvatar from '../../../components/MJAvatar';
import MJTypography from '../../../components/MJTypography';
import { useMediaQuery } from 'react-responsive';
import MJButton from '../../../components/MJButton';
import MJModal from '../../../components/MJModal';
import ContactForm from './ContactForm';

const coverImageStyle = css`
    width: 100%;
    height: 420px;
    background-color: #ffffff;
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
    id: string;
    image: string;
    name: string;
    old: string;
}

const CoverProfile: React.FC<CoverProfileProps> = ({ id, image, name, old }) => {
    const isMobile = useMediaQuery({ maxWidth: 600 });
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <div css={coverImageStyle}></div>
            <TitleContainer>
                <div css={textCss}>
                    <MJAvatar size="L" src={image} />
                    {isMobile ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
                            <TitleTextMbl variant="h5" bold={true} skelton={false}>
                                {name} {old && `(${old})`}
                            </TitleTextMbl>
                        </div>
                    ) : (
                        <TitleText variant="h4" bold={true} skelton={false} style={{ marginLeft: '14px' }}>
                            {name} {old && `(${old})`}
                        </TitleText>
                    )}
                </div>
                <div css={buttonCss}>
                    <MJButton label="きびだんごを申請する" onClick={() => setOpen(true)} />
                </div>
            </TitleContainer>
            <MJModal 
                open={open} 
                onClose={() => setOpen(false)} 
                title={'きびだんごを申請する'} 
                subTitle={'以下のフォームに連絡先情報を\n入力してください。'} 
                body={
                    <ContactForm id={id} onSubmitEnd={() => setOpen(false)} />
                }
            />
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
            padding-bottom: 80px;
            justify-content: left;
            flex-direction: column;

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

const textCss = css`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-start;
    flex-direction: row;
    text-align: left;
    width: 100%;
`;

const TitleText = styled(MJTypography)`
    height: 33px;
    padding-bottom: 5px;
    padding-left: 14px;
    margin: 0;
    color: #000000;
`;

const TitleTextMbl = styled(MJTypography)`
    height: 33px;
    padding-top: 5px;
    padding-left: 14px;
    color: #000000;
`;

const buttonCss = css`
    float: right;

    @media (max-width: 500px) {
        width: 100%;
        margin-top: 15px;
        margin-left: auto;
    }
`;

export default CoverProfile;