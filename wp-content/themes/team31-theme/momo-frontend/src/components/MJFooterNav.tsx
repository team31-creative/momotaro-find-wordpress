/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase } from "@mui/material";
import Icon from "@mdi/react";
import { mdiHome,mdiAccountMultiplePlusOutline, mdiDotsCircle, mdiBell, mdiAccount } from "@mdi/js";

const MJFooterNav = () => {

    const navList = [
        {
            icon:  mdiHome,
            label: "HOME", 
            path: "/" 
        },
        {
            icon:  mdiAccountMultiplePlusOutline,
            label: "MATCHING", 
            path: "/matching" 
        },
        {
            icon:  mdiDotsCircle,
            label: "KIBIDANGO", 
            path: "/kibi/guest" 
        },
        {
            icon:  mdiBell,
            label: "NEWS", 
            path: "/news" 
        },
        {
            icon:  mdiAccount,
            label: "MYPAGE", 
            path: "/mypage" 
        },
    ]
    return (
        <div css={MJFooterStyle}>
            <nav>
                <ul
                    css={ulCss}
                >
                    {navList.map((node) => (
                        <li key={node.label}>
                            <ButtonBase
                                css={buttonCss}
                                href={node.path}
                                component="a"
                            >
                                <Icon path={node.icon} size={1.2} style={{ marginTop: "5px", marginBottom: "4px"}} />
                                {node.label}
                            </ButtonBase>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

const ulCss = css`
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0 20px;
`;

const buttonCss = css`
    background: none;
    border: none;
    color: white;
    font-size: 10px;
    cursor: pointer;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
`;

const MJFooterStyle = css`
    width: 100%;
    height: 55px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #0f0073;

    @media (min-width: 700px) {
        display: none;
    }
`;

export default MJFooterNav;