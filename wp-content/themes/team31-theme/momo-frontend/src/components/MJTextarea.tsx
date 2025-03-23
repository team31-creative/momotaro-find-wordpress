/** @jsxImportSource @emotion/react */
import React from "react";
import Textarea from '@mui/joy/Textarea';
import MJTypography from "./MJTypography";
import styled from "styled-components";
import { css } from "@emotion/react";

interface MJInputProps {
    errorMessage?: string;
    label: string;
    placeholder?: string;
    value: string;
    type: string;
    isRequired?: boolean;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MJInput: React.FC<MJInputProps> = ({errorMessage,label,isRequired, ...rest}) => {
    return (
        <>
            <MJTypography css={labelCss}>{label}{isRequired && <span style={{ color: "red" }}> *</span>}</MJTypography>
            <GlassTextField
                variant="outlined"
                minRows={4}
                {...rest}
            />
            {errorMessage && (<MJTypography variant="subtitle2" css={errorTextCss}>{errorMessage}</MJTypography>)}
        </>
    );
}

const errorTextCss = css`
    font-size: 13px;
    margin-top: 4px;
    color: red;
`;

const labelCss = css`
    margin: 5px 0;
`;

const GlassTextField = styled(Textarea)`
    padding: 0;
    width: 100%;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    .MuiTextarea-root {
        border: 1px solid rgba(192, 192, 192, 0.865);
        border-radius: 10px;
        padding: 5px 10px;
    }

    .MuiTextareaBase-root.Mui-focused {
        border: 1px solid #880000;
    }
`;

export default MJInput;