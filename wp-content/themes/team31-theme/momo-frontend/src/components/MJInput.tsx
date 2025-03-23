/** @jsxImportSource @emotion/react */
import React from "react";
import { TextField } from "@mui/material";
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
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MJInput: React.FC<MJInputProps> = ({errorMessage,label,isRequired, ...rest}) => {
    return (
        <>
            <MJTypography css={labelCss}>{label}{isRequired && <span style={{ color: "red" }}> *</span>}</MJTypography>
            <GlassTextField
                variant="standard"
                InputProps={{ disableUnderline: true }}
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

const GlassTextField = styled(TextField)`
    padding: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    &[disabled] {
        background: rgba(0, 0, 0, 0.3);
        color: rgba(0, 0, 0, 0.5);
        cursor: not-allowed;

        .MuiInputBase-root {
            border: 1px solid rgba(192, 192, 192, 0.5);
        }
    }

    .MuiInputBase-root {
        border: 1px solid rgba(192, 192, 192, 0.865);
        border-radius: 10px;
        padding: 5px 10px;
    }

    .MuiInputBase-root.Mui-focused {
        border: 1px solid #880000;
    }
`;

export default MJInput;