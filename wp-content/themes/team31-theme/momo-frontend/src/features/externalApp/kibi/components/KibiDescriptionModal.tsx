"use client";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { mdiClose } from "@mdi/js"
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, DialogProps, Typography, TypographyProps, Button } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import { useMediaQuery } from 'react-responsive'
import * as React from "react";

interface KibiDescriptionModalProps extends Omit<DialogProps, "children" | "title"> {
    title?: React.ReactNode;
    extraHeaderContent?: React.ReactNode;
    body?: React.ReactNode;
    isFormDirty?: boolean;
    isShowCloseButton?: boolean;
    form?: HTMLFormElement | null;
    loading?: boolean;
    isError?: boolean;
    onCancel?: () => void;
    onConfirm?: () => void;
    onClose?: () => void;
    subTitleProps?: TypographyProps;
    isCustomMode?: boolean;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const KibiDescriptionModal = ({
    title,
    body,
    isShowCloseButton = true,
    extraHeaderContent,
    subTitleProps,
    // onCancel,
    // onConfirm,
    onClose,
    isCustomMode,
    ...rest
}: React.PropsWithChildren<KibiDescriptionModalProps>) => {

    const isSmartPhone = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <Dialog
            fullScreen={isSmartPhone} // Enable full-screen mode for small screens
            onClose={() => {
                onClose?.();
            }}
            className={dialogCss}
            TransitionComponent={isSmartPhone ? Transition : undefined}
            {...rest}
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                {body}
            </DialogContent>
      </Dialog>
    );
};

const dialogCss = css`
    &.MuiDialog-root {
        .MuiDialog-paper {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
        }
    }
`;

const headCss = css`
    padding: 20px 71px 28px 24px;
`;

const bodyCss = css`
    overflow: auto;
    padding: 0 24px 32px;
`;

const titleCss = css`
    word-break: break-word;
    &.MuiTypography-root {
        margin: 0;
    }
`;

const StyledSubTitle = styled(Typography)`
    display: inline-block;
    padding-top: 8px;
    word-break: break-word;
    white-space: pre-wrap; /* Allows \n to create line breaks */
`;

export default KibiDescriptionModal;
