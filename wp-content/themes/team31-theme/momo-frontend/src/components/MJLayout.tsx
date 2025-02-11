/** @jsxImportSource @emotion/react */
import React from 'react';
import MJHeader from './MJHeader';
import MJFooter from './MJFooter';
import { css } from '@emotion/react';

interface MJLayoutProps {
    children: React.ReactNode;
}

const MJLayout: React.FC<MJLayoutProps> = ({ children }) => {
    return (
        <>
            <MJHeader />
            <div css={indexPageContainerCss}>
                {children}
            </div>
            <MJFooter />
        </>
    );
};

const indexPageContainerCss = css`
  width: 76%;
  margin: 0 auto;
  min-width: 340px;
`;

export default MJLayout;