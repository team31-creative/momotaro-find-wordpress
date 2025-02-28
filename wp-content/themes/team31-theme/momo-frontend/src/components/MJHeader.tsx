/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
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

    const isMobile = window.innerWidth <= 800;

    const menuItems: MenuItemLists[] = [
        { text: 'HOME', href: '/' },
        { text: 'NEWS', href: '/news' },
        { text: 'BLOG', href: '/blog' },
        { text: 'POLL', href: '/poll' },
        { text: 'CONTACT', href: '/contact' }
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
    background: linear-gradient(90deg, #fff 30%, #ff00c8 45%, #6200ff 80%);
    border-bottom: 1px solid rgb(0, 0, 0);
    height: 60px;
    width: 100%;

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
`;

const MJMenuItemRowCss = css`
    width: 400px;
    color: white;
    margin-left: auto;
    margin-right: 25px;

    @media (max-width: 800px) {
        display: none;
    }
`;

export default MJHeader;