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

    const menuItems: MenuItemLists[] = [
        { text: 'HOME', href: '/' },
        { text: 'NEWS', href: '/news' },
        { text: 'BLOG', href: '/blog' },
        { text: 'CONTACT', href: '/contact' }
    ];

    const navigate = useNavigate();

    return (
        <header css={MJHeaderCss}>
            <div css={MJHeaderContainerCss}>
                <MJButton imageUrl={Logo} onClick={() => navigate('/')} width={120} />
                <MJMenuItemRow className={MJMenuItemRowCss} height={60} items={menuItems} />
            </div>
        </header>  
    );
}

const MJHeaderCss = css`
    background-color:rgb(255, 255, 255);
    border-bottom: 1px solid rgb(0, 0, 0);
    height: 60px;
    width: 100%;
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

    > img {
        height: 60px;
        width: 120px;
    }
`;

const MJMenuItemRowCss = css`
    width: 400px;
    margin-left: auto;
    margin-right: 25px;
`;

export default MJHeader;