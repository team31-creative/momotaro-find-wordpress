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
                <div css={indexPageContainerCss}>
                    {children}
                </div>
                <MJFooter />
            </UserProvider>
        </>
    );
};

const indexPageContainerCss = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 340px;
`;

export default MJLayout;