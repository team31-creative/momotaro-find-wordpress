"use client";
import React, { createContext, useContext, useMemo } from "react";
import MJSnackbar, { MJSnackbarProps, MJSnackbarActionButton } from "../components/MJSnackBar";

interface MJSnackbarOptions extends Omit<MJSnackbarProps, "open" | "actionButton"> {
    actionButton?: MJSnackbarActionButton | "dismiss";
}

type SnackbarContextActions = {
  showSnackbar: (options: MJSnackbarOptions) => void;
  showErrorSnackbar: (options: MJSnackbarOptions) => void;
  closeSnackbar: () => void;
};

const SnackbarContext = createContext({} as SnackbarContextActions);

interface SnackbarContextProviderProps {
  children: React.ReactNode;
}

const SnackbarProvider: React.FC<SnackbarContextProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [snackbarProps, setSnackbarProps] = React.useState<MJSnackbarOptions>({});
  const [snackbarKey, setSnackbarKey] = React.useState(Date.now());
  const showNewSnackbar = () => {
    setSnackbarKey(Date.now());
  };

  const showSnackbar = (options: MJSnackbarOptions) => {
    // open after previous item close
    // TODO: Update an alternative instead of using setTimeout
    const orderOpenTime = setTimeout(() => {
      setIsError(false);
      setSnackbarProps(options);
      setIsOpen(true);
      clearTimeout(orderOpenTime);
      showNewSnackbar();
    });
  };

  const showErrorSnackbar = (options: MJSnackbarOptions) => {
    // open after previous item close
    // TODO: Update an alternative instead of using setTimeout
    const orderOpenTime = setTimeout(() => {
      setIsError(true);
      setSnackbarProps(options);
      setIsOpen(true);
      clearTimeout(orderOpenTime);
      showNewSnackbar();
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const renderShowButton = useMemo<MJSnackbarActionButton | undefined>(() => {
    if (snackbarProps.actionButton === "dismiss") {
      return { text: "Close", onClick: handleClose };
    }
    return snackbarProps.actionButton;
  }, [snackbarProps.actionButton]);

  return (
    <SnackbarContext.Provider value={{ showSnackbar, showErrorSnackbar, closeSnackbar: handleClose }}>
      <MJSnackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        color={isError ? "error" : "primary"}
        {...snackbarProps}
        open={isOpen}
        onClose={handleClose}
        actionButton={renderShowButton}
        snackbarKey={snackbarKey}
      />
      {children}
    </SnackbarContext.Provider>
  );
};

const useSnackbar = (): SnackbarContextActions => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error("useSnackbar must be used within an SnackbarProvider");
  }

  return context;
};

export { SnackbarProvider, useSnackbar };