/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useMediaQuery } from "react-responsive";
import MJMenuItemRow from "./MJMenuItemRow";
import Logo from "../assets/FIND_MOMOTARO.svg";
import { useNavigate } from 'react-router-dom';
import MJButton from "./MJButton";

interface MJHeaderProps {
    children?: React.ReactNode;
}

interface MenuItemLists {
    text: string;
    href: string;
}

const MJHeader: React.FC<MJHeaderProps> = ({ children }) => {

    const isMobile = useMediaQuery({ maxWidth: 800 });

    const menuItems: MenuItemLists[] = [
        { text: 'HOME', href: '/' },
        { text: 'MATCHING', href: '/matching' },
        { text: 'KIBIDANGO', href: '/kibi/guest' },
        { text: 'NEWS', href: '/news' },
        { text: 'MYPAGE', href: '/mypage' }
    ];

    const navigate = useNavigate();

    return (
        <header css={MJHeaderCss}>
            <div css={MJHeaderContainerCss}>
                <MJButton imageUrl={Logo} onClick={() => navigate('/')} width={isMobile ? 70: 120} />
                <MJMenuItemRow className={MJMenuItemRowCss} height={60} items={menuItems} />
            </div>
        </header>  
    );
}

const MJHeaderCss = css`
    background: #000055;
    // border-bottom: 1px solid rgb(0, 0, 0);
    // box-shadow: 0 32px 32px rgba(0, 0, 0, 1);
    height: 60px;
    width: 100%;
    position: fixed;
    z-index: 1;

    @media (max-width: 800px) {
        height: 40px;
    }
`;

const MJHeaderContainerCss = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    min-width: 340px;
    padding: 0 20px;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
        max-width: 50px;
        padding: 0;
    }
`;

const MJMenuItemRowCss = css`
    width: 530px;
    color: white;
    margin-left: auto;
    margin-right: 25px;

    @media (max-width: 800px) {
        display: none;
    }
`;

export default MJHeader;