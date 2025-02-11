/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MJTypography from "./MJTypography";

const MJFooter = () => {
    return (
        <footer css={MJFooterStyle}>
            <MJTypography variant="body1" align="center">
                &copy; 2021 Team 31
            </MJTypography>
        </footer>  
    );
}

const MJFooterStyle = css`
    position: absolute;
    bottom: 0;
    background-color: #6e6e6e;
    color: white;
    width: 100%;
    padding: 5px 0;
`;

export default MJFooter;