import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Button, Snackbar, SnackbarProps } from "@mui/material";
import React from "react";

export const ATSSnackbarColors = ["primary", "error"] as const;
export type KBSnackbarColor = (typeof ATSSnackbarColors)[number];

export type KBSnackbarActionButton = {
  text: React.ReactNode;
  onClick?: (e: React.SyntheticEvent) => void;
};

export interface KBSnackbarProps extends SnackbarProps {
  color?: KBSnackbarColor;
  actionButton?: KBSnackbarActionButton;
  snackbarKey?: number;
}

export const KBSnackbar = ({
  actionButton,
  color = "primary",
  snackbarKey,
  ...rest
}: React.PropsWithChildren<KBSnackbarProps>) => {
  return (
    <StyledSnackbar
      key={snackbarKey}
      action={
        actionButton && (
          <Button color="secondary" size="small" className={buttonActionCss} onClick={actionButton?.onClick}>
            {actionButton.text}
          </Button>
        )
      }
      {...rest}
      data-button-action={Boolean(actionButton)}
      data-color={color}
      ClickAwayListenerProps={{ onClickAway: () => null }}
    />
  );
};

const StyledSnackbar = styled(Snackbar)`
    &[data-button-action="true"] {
        .MuiSnackbarContent-root {
            padding-left: 24px;
        }
    }

    &[data-color="error"] .MuiSnackbarContent-root {
        background-color: #b80000;
        color: white;
    }
`;

const buttonActionCss = css`
  &.MuiButtonBase-root {
    padding: 5px 8px;
    color: var(--brand-ocean);
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    text-transform: uppercase;
    cursor: pointer;
    [data-color="error"] & {
      background: none;
      box-shadow: none;
      background-color: #f00;
      color: white;
    }
  }
`;

export default KBSnackbar;