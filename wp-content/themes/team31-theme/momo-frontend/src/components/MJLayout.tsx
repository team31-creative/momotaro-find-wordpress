/** @jsxImportSource @emotion/react */
import React from 'react';
import MJHeader from './MJHeader';
import MJFooter from './MJFooter';
import { css } from '@emotion/react';
import { UserProvider } from '../context/UserContext';

interface MJLayoutProps {
    children: React.ReactNode;
}

const MJLayout: React.FC<MJLayoutProps> = ({ children }) => {
    return (
        <>
            <UserProvider>
                <MJHeader />
                <div css={backgroundCss}>
                    <div css={indexPageContainerCss}>
                        {children}
                    </div>
                </div>
                <MJFooter />
            </UserProvider>
        </>
    );
};

const backgroundCss = css`
    background: linear-gradient(155deg, #FFFFFF 11%, #FF3ABD 35%, #6625ff 65%);
`;

const indexPageContainerCss = css`  
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 340px;
`;

export default MJLayout;