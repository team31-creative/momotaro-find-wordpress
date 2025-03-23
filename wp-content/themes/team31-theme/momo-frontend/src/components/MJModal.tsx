"use client";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { mdiClose } from "@mdi/js";
import { Dialog, DialogProps, Typography, TypographyProps } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import { useMediaQuery } from 'react-responsive'
import * as React from "react";

import MJButton from "./MJButton";
import MJTypography from "./MJTypography";

export interface MJModalButtonAction {
    type?: "confirm" | "cancel" | "custom" | string;
    name?: React.ReactNode;
    additionalConditionAlertConfirm?: boolean;
    MJButtonProps?: React.ComponentProps<typeof MJButton>;
}

interface MJModalProps extends Omit<DialogProps, "children" | "title"> {
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
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

export const MJModal = ({
    title,
    subTitle,
    body,
    isShowCloseButton = true,
    extraHeaderContent,
    subTitleProps,
    // onCancel,
    // onConfirm,
    onClose,
    isCustomMode,
    ...rest
}: React.PropsWithChildren<MJModalProps>) => {

    const handleClose = () => {
        onClose?.();
    };

    const isSmartPhone = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <Dialog
            fullScreen={isSmartPhone} // Enable full-screen mode for small screens
            onClose={() => {
                if (isCustomMode) {
                    onClose?.();
                }
            }}
            className={dialogCss}
            TransitionComponent={isSmartPhone ? Transition : undefined}
            {...rest}
        >
            <div className={headCss}>
                {(isShowCloseButton ) && (
                    <MJButton
                        className={closeCss}
                        color="text"
                        icon={mdiClose}
                        onClick={handleClose}
                    />
                )}
                <MJTypography variant="h5" bold={true} className={titleCss}>
                    {title}
                </MJTypography>
                {subTitle && (
                    <StyledSubTitle variant="body1" {...subTitleProps}>
                        {subTitle}
                    </StyledSubTitle>
                )}
                {extraHeaderContent && extraHeaderContent}
            </div>
            <div className={bodyCss} id="modal-body">
                {body}
            </div>
        </Dialog>
    );
};

const dialogCss = css`
    &.MuiDialog-root {
        .MuiDialog-paper {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
            border-radius: 30px;

            @media screen and (max-width: 600px) {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                margin-top: 10%;
                height: 95%;
            }
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

const closeCss = css`
    &.MuiButtonBase-root {
        position: absolute;
        right: 24px;
        top: 17px;
    }
`;

const StyledSubTitle = styled(Typography)`
    display: inline-block;
    padding-top: 8px;
    word-break: break-word;
    white-space: pre-wrap; /* Allows \n to create line breaks */
`;

export default MJModal;
