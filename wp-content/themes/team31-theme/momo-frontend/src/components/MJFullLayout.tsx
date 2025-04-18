/** @jsxImportSource @emotion/react */
import React from 'react';
import MJHeader from './MJHeader';
import MJFooter from './MJFooter';
import MJFooterNav from './MJFooterNav';
import { css } from '@emotion/react';
import { LayoutProvider } from '../context/LayoutContext';

interface MJLayoutProps {
    children: React.ReactNode;
}

const MJLayout: React.FC<MJLayoutProps> = ({ children }) => {
    return (
        <>
            <LayoutProvider>
                    <MJHeader />
                    <div css={indexPageContainerCss}>
                        {children}
                    </div>
                    <MJFooterNav />
                    <MJFooter />
            </LayoutProvider>
        </>
    );
};

const indexPageContainerCss = css`
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: 40px;
  min-width: 340px;
`;

export default MJLayout;