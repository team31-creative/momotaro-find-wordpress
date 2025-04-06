/** @jsxImportSource @emotion/react */
import React from 'react';
import MJHeader from './MJHeader';
import MJFooter from './MJFooter';
import MJFooterNav from './MJFooterNav';
import { css } from '@emotion/react';
import { UserProvider } from '../context/UserContext';
import { SnackbarProvider } from '../context/SnackbarContext';

interface MJLayoutProps {
    children: React.ReactNode;
}

const MJLayout: React.FC<MJLayoutProps> = ({ children }) => {
    return (
        <>
            <SnackbarProvider>
                <UserProvider>
                    <MJHeader />
                    <div css={backgroundCss}>
                        <div css={indexPageContainerCss}>
                            {children}
                        </div>
                    </div>
                    <MJFooterNav />
                    <MJFooter />
                </UserProvider>
            </SnackbarProvider>
        </>
    );
};

const backgroundCss = css`
    background: linear-gradient(170deg, #000000 0%, #000055 35%, #aa0088 80%);
`;

const indexPageContainerCss = css`  
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  min-width: 340px;
`;

export default MJLayout;