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
  margin: 0;
  padding: 0;
  min-width: 340px;
`;

export default MJLayout;